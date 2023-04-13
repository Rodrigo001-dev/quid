import { SetStateAction } from "react";
import Image from "next/image";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";

interface PaymentMethodSectionProps {
  paymentMethod: string;
  setPaymentMethod: (value: SetStateAction<string>) => void;
  alias: string;
  setAlias: (value: SetStateAction<string>) => void;
}

export function PaymentMethodSection({
  paymentMethod,
  setPaymentMethod,
  alias,
  setAlias,
}: PaymentMethodSectionProps) {
  return (
    <section className="w-screen sm-mim:w-full mx-auto sm-mim:border sm-mim:border-primary-200 rounded-lg">
      <div className="pt-12 px-12">
        <strong className="text-xl font-semibold text-black">
          Escolha o método de pagamento
        </strong>
        <div className="sm:w-64 md:w-[480px] border border-primary-500 rounded-lg mt-5 mb-14 py-10 px-6">
          <RadixRadioGroup.Root
            name="paymentMethods"
            id="payment"
            className="flex flex-col gap-2"
            aria-label="Método de pagamento: MB Way ou Multibanco"
            required
            value={paymentMethod}
            onValueChange={(value) => setPaymentMethod(value)}
          >
            <div className="flex items-center flex-col">
              <div className="flex items-center mr-auto">
                <RadixRadioGroup.Item
                  className="w-10 h-10 rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
                  value="MB Way"
                  id="MB Way"
                >
                  <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-6 after:h-6 after:rounded-[100%] after:bg-primary-500" />
                </RadixRadioGroup.Item>

                <label
                  className="flex items-center text-black text-lg leading-none pl-[15px]"
                  htmlFor="MB Way"
                >
                  <Image
                    className="mx-6"
                    src="/assets/MBWay.svg"
                    width={80}
                    height={80}
                    id="MB Way"
                    alt="MB Way"
                  />
                  MB Way
                </label>
              </div>

              <div className="flex items-center sm-mim:mr-auto mt-10">
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    onWheel={(event) => event.preventDefault()}
                    className="w-52 sm-mim:w-60 py-2 px-3 focus:outline-none pl-24 bg-gray-100 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                    placeholder="962154568"
                    value={alias}
                    onChange={(event) => setAlias(event.target.value)}
                  />
                  <span className="flex items-center absolute left-2 top-2 bottom-2 text-black">
                    PT +351
                    <div className="inline-block border-r-2 border-primary-200 mx-2 h-[42px]" />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[117%] md:w-[111.4%] bg-primary-500 h-[1px] -ml-6 my-7" />

            <div className="flex items-center flex-col">
              <div className="flex items-center sm-mim:mr-auto">
                <RadixRadioGroup.Item
                  className="w-10 h-10 rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
                  value="Multibanco"
                  id="Multibanco"
                >
                  <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-6 after:h-6 after:rounded-[100%] after:bg-primary-500" />
                </RadixRadioGroup.Item>

                <label
                  className="flex items-center text-black text-lg leading-none sm-mim:pl-4"
                  htmlFor="Multibanco"
                >
                  <Image
                    className="mx-6"
                    src="/assets/Multibanco.svg"
                    width={40}
                    height={40}
                    alt="Multibanco"
                  />
                  Referência Bancária
                </label>
              </div>

              <div className="lg:w-72 flex flex-col bg-gray-100 border border-primary-500 py-6 px-8 rounded-lg mr-auto mt-6">
                <strong className="text-lg">
                  Entidade:{" "}
                  <span className="font-normal text-lg">22222222</span>
                </strong>
                <strong className="text-lg">
                  Referência:{" "}
                  <span className="font-normal text-lg">22222222</span>
                </strong>
                <strong className="text-lg">
                  Valor: <span className="font-normal text-lg">9,95€</span>
                </strong>
              </div>
            </div>
          </RadixRadioGroup.Root>
        </div>
      </div>
    </section>
  );
}
