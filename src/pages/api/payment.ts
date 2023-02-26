import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function paymentHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "email",
      pass: "password",
    },
  });

  const { method, body } = req;

  if (method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("🚀 ~ file: payment.ts:24 ~ body:", body);

  if (!body || !body.email || !body.content) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const mailOptions = {
    from: "rodrigorael53@gmail.com",
    to: body.email,
    subject: "Procuração",
    attachments: [
      {
        filename: "procuracao.pdf",
        content: body.content,
        encoding: "base64",
        contentType: "application/pdf",
      },
    ],
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: "Payment confirmed and PDF sent" });
}
