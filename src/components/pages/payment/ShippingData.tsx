import { SetStateAction } from "react";

interface ShippingDataProps {
  customerName: string;
  setCustomerName: (value: SetStateAction<string>) => void;
  email: string;
  setEmail: (value: SetStateAction<string>) => void;
}

export function ShippingData({
  customerName,
  setCustomerName,
  email,
  setEmail,
}: ShippingDataProps) {
  return (
    <section className="w-screen sm-mim:w-full mx-auto border border-primary-200 rounded-lg">
      <div className="pt-12 px-5 sm-mim:px-12">
        <strong className="text-xl font-semibold text-black">
          Dados de Envio
        </strong>
        <fieldset className="flex flex-col space-y-7 my-11">
          <input
            className="py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
            type="text"
            placeholder="Insira o seu nome"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            required
          />
          <input
            className="py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
            type="email"
            placeholder="Insira o seu email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </fieldset>
      </div>
    </section>
  );
}
