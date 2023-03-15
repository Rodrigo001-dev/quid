import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/services/prisma";
import { eupago } from "@/services/eupago";

import { errorMessages } from "@/utils/errors/errorMessages";

export default async function paymentHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method !== "POST") {
    return res.status(405).json({ message: errorMessages.methodNotAllowed });
  }

  if (
    !body ||
    !body.email ||
    !body.content ||
    !body.customerName ||
    !body.alias ||
    !body.paymentMethod
  ) {
    return res.status(400).json({ message: errorMessages.invalidBody });
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
    return res.status(409).json({ message: errorMessages.pendingPayment });
  }

  let isEupagoReturnSuccessStatusCode = false;

  console.log(
    "🚀 ~ file: payment.ts:55 ~ body.paymentMethod:",
    body.paymentMethod
  );
  if (body.paymentMethod === "MB Way") {
    const { status } = await eupago.post("/mbway/create", {
      id: customer.id,
      chave: "demo-3484-7044-e80a-50d",
      valor: 9.95,
      alias: body.alias,
      descricao: `pagamento referente a procuração, nome do cliente: ${body.customerName}`,
    });

    if (status === 200) {
      isEupagoReturnSuccessStatusCode = true;
    }
  }

  if (body.paymentMethod === "Multibanco") {
    const { status } = await eupago.post("/multibanco/create", {
      id: customer.id,
      chave: "demo-3484-7044-e80a-50d",
      valor: 9.95,
      per_dup: 1,
    });

    if (status === 200) {
      isEupagoReturnSuccessStatusCode = true;
    }
  }

  if (!customer?.id || !isEupagoReturnSuccessStatusCode) {
    return res.status(400).json({
      message: errorMessages.errorClientIdOrEupagoAPI,
    });
  }

  await prisma.payment.create({ data: { customer_id: customer.id } });

  res.status(200).json({ message: "Payment sended" });
}
