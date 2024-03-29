import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/services/prisma";
import { transporter } from "@/services/transporter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { identificador } = body;

  const paymentConfirmed = await prisma.payment.findFirst({
    where: {
      customer_id: identificador,
      excluded_at: null,
      payment_status: "pendente",
    },
  });

  if (!paymentConfirmed) {
    return res
      .status(404)
      .json({ message: "Cannot Find the customer payment" });
  }

  const customer = await prisma.customer.findUnique({
    where: { id: paymentConfirmed.customer_id },
  });

  if (customer?.pdf) {
    const mailOptions = {
      from: process.env.EMAIL,
      to: customer?.email,
      subject: "Procuração",
      attachments: [
        {
          filename: "procuração.pdf",
          content: customer.pdf,
          encoding: "base64",
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions).catch(() => {
      return res.status(500).json({ message: "Error sending email" });
    });

    await prisma.payment.update({
      where: { id: paymentConfirmed.id },
      data: {
        payment_status: "paga",
        excluded_at: new Date(),
        customer: {
          update: { pdf: null },
        },
      },
    });
  }

  return res.status(200).json({ message: "Email sended" });
}
