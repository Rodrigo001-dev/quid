import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { prisma } from "../../services/prisma";

export default async function paymentHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (
    !body ||
    !body.email ||
    !body.content ||
    !body.customerName ||
    !body.alias
  ) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  const customer = await prisma.customer.upsert({
    where: { email: body.email },
    update: { pdf: body.content },
    create: {
      name: body.customerName,
      email: body.email,
      alias: String(body.alias),
      pdf: body.content,
    },
  });

  const paymentAlreadyExist = await prisma.payment.findFirst({
    where: {
      customer_id: customer.id,
      excluded_at: null,
      payment_status: "pendente",
    },
  });

  if (paymentAlreadyExist) {
    return res
      .status(409)
      .json({ message: "customer already has a pending payment" });
  }

  const options = {
    method: "POST",
    url: "https://sandbox.eupago.pt/clientes/rest_api/mbway/create",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: {
      id: customer.id,
      chave: "demo-3484-7044-e80a-50d",
      valor: 9.95,
      alias: body.alias,
      descricao: `pagamento referente a procuração, nome do cliente: ${body.customerName}`,
    },
  };

  await axios.request(options).then(async () => {
    if (customer?.id) {
      await prisma.payment.create({ data: { customer_id: customer.id } });
    } else {
      return res.status(400).json({ message: "invalid client id" });
    }
  });

  res.status(200).json({ message: "Payment sended" });
}
