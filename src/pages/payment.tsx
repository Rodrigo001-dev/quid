import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import * as Checkbox from "@radix-ui/react-checkbox";

import { api } from "@/services/api";

import { Toast } from "@/components/shared/Toast";

import { usePersonData } from "@/store/usePersonData";
import { useAttorneyData } from "@/store/useAttorneyData";
import { useLetterOfAttorney } from "@/store/useLetterOfAttorney";
import { useAdditionalInformation } from "@/store/useAdditionalInformation";

import { errorMessages } from "@/utils/errors/errorMessages";
import { generatePDF } from "@/utils/generatePDF";

export default function Payment() {
  const [email, setEmail] = useState("");
  const [alias, setAlias] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(
    undefined
  );
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(false);

  const router = useRouter();
  console.log(
    "🚀 ~ file: payment.tsx:15 ~ Payment ~ paymentMethod:",
    paymentMethod
  );

  async function makePayment() {
    try {
      setIsSubmitButtonDisable(true);

      const pdfBytes = generatePDF();
      const pdfBase64 = Buffer.from(pdfBytes).toString("base64");

      await api.post("api/payment", {
        paymentMethod,
        email,
        alias,
        customerName,
        content: pdfBase64,
      });

      router.push("/thanks");
    } catch (error) {
      console.log(
        "🚀 ~ file: payment.tsx:50 ~ makePayment ~ error:",
        error.response.status
      );
      switch (error.response.status) {
        case 405:
          if (error.response.data.message === errorMessages.methodNotAllowed) {
            return Toast({
              message:
                "Ocorreu um erro em nossos servidores, por favor tente novamente mais tarde",
            });
          }
          break;

        case 400:
          if (error.response.data.message === errorMessages.invalidBody) {
            return Toast({
              message:
                "Algum dado está faltando! Por favor, volte e preencha o formulário da procuração novamente",
            });
          }

          if (
            error.response.data.message ===
            errorMessages.errorClientIdOrEupagoAPI
          ) {
            return Toast({
              message:
                "Ocorreu um erro inesperado! Pode ser um erro em nossos servidores ou no envio do pagamento, por favor tente novamente mais tarde",
            });
          }
          break;

        case 409:
          if (error.response.data.message === errorMessages.pendingPayment) {
            return Toast({
              message:
                "Você não pode solicitar uma procuração com um pagamento pendente! Por favor, efetue o pagamento pendente para solicitar outra procuração",
            });
          }
          break;

        default:
          Toast({
            message: "Ops! Algo deu errado, por favor tente novamente",
          });
          break;
      }
    } finally {
      usePersonData.setState({
        powers: "",
        personName: "",
        personMaritalStatus: undefined,
        personGender: undefined,
        personNationality: "",
        personCountry: undefined,
        personConcelho: undefined,
        personFreguesia: undefined,
        registrationCalendar: "",
        taxIdentificationNumber: "",
        personIdentificationNumber: "",
        personDocument: undefined,
        personIssuingCountry: undefined,
        personHabitualResidence: "",
      });

      useAttorneyData.setState({
        attorneyName: "",
        attorneyMaritalStatus: undefined,
        attorneyGender: undefined,
        attorneyNationality: "",
        attorneyCountry: undefined,
        attorneyConcelho: undefined,
        attorneyFreguesia: undefined,
        attorneyRegistrationCalendar: "",
        attorneyTaxIdentificationNumber: "",
        attorneyIdentificationNumber: "",
        attorneyDocument: undefined,
        attorneyIssuingCountry: undefined,
        attorneyHabitualResidence: "",
        attorneys: [],
      });

      useLetterOfAttorney.setState({
        dateOfAttorney: "",
        dateOfPowerOfAttorney: "",
        placeOfAttorney: "",
      });

      useAdditionalInformation.setState({
        replaceWithSomeoneElse: undefined,
        concludeBusinessWithYourself: undefined,
      });

      setEmail("");
      setAlias("");
      setCustomerName("");
      setPaymentMethod(undefined);
      setIsSubmitButtonDisable(false);
    }
  }

  async function handleSubmitPayment(event: FormEvent) {
    event.preventDefault();

    await makePayment();
  }

  return (
    <main className="max-w-6xl m-auto mt-28">
      <h1 className="flex items-center justify-center text-3xl font-bold text-primary-500 mb-4">
        Estamos quase a finalizar...
      </h1>
      <form role="form" onSubmit={handleSubmitPayment} className="flex">
        <div className="flex flex-col max-w-xl mx-32 gap-14 mb-11">
          <section className="w-full border border-primary-200 rounded-lg">
            <div className="pt-12 pl-12">
              <strong className="text-xl font-semibold text-black">
                Dados de Envio
              </strong>
              <fieldset className="space-y-7 my-11">
                <input
                  className="w-[480px] py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                  type="text"
                  placeholder="Insira o seu nome"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  required
                />
                <input
                  className="w-[480px] py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                  type="email"
                  placeholder="Insira o seu email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />

                <Accordion.Root
                  className="w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
                  type="single"
                  collapsible
                >
                  <Accordion.Item value="item-1">
                    <Accordion.Header>
                      <Accordion.Trigger className="mb-6 flex group">
                        <strong className="font-normal text-lg">
                          Deseja Fatura?
                        </strong>
                        <ChevronDownIcon
                          className="ml-4 my-auto w-7 h-7 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                          aria-hidden
                          color="#A180CB"
                        />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <fieldset className="flex items-center gap-10">
                        <input
                          type="text"
                          className="w-[220px] py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                          placeholder="Insira o seu nome"
                        />

                        <input
                          type="text"
                          className="w-[220px] py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                          placeholder="Insira o seu NIF"
                        />
                      </fieldset>

                      <input
                        className="w-[480px] mt-5 py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                        type="text"
                        placeholder="Insira a sua morada"
                      />

                      <fieldset className="flex items-center gap-10 mt-5">
                        <input
                          type="text"
                          className="w-[220px] py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                          placeholder="Insira a sua morada"
                        />

                        <input
                          type="text"
                          className="w-[220px] py-3 px-5 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                          placeholder="Insira o código postal"
                        />
                      </fieldset>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </fieldset>
            </div>
          </section>

          <section className="border border-primary-200 rounded-lg">
            <div className="pt-12 pl-12">
              <strong className="text-xl font-semibold text-black">
                Escolha o método de pagamento
              </strong>
              <div className="w-[480px] border border-primary-500 rounded-lg mt-5 mb-14 py-10 px-6">
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

                    <div className="flex items-center mr-auto mt-10">
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          onWheel={(event) => event.preventDefault()}
                          className="w-60 py-2 px-3 focus:outline-none pl-24 bg-gray-100 rounded-lg border shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
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

                  <div className="w-[111.4%] bg-primary-500 h-[1px] -ml-6 my-7" />

                  <div className="flex items-center flex-col">
                    <div className="flex items-center mr-auto">
                      <RadixRadioGroup.Item
                        className="w-10 h-10 rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
                        value="Multibanco"
                        id="Multibanco"
                      >
                        <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-6 after:h-6 after:rounded-[100%] after:bg-primary-500" />
                      </RadixRadioGroup.Item>

                      <label
                        className=" flex items-center text-black text-lg leading-none pl-[15px]"
                        htmlFor="Multibanco"
                      >
                        <Image
                          className="mx-6"
                          src="/assets/Multibanco.svg"
                          width={52}
                          height={52}
                          alt="Multibanco"
                        />
                        Referência Bancária
                      </label>
                    </div>

                    <div className="flex flex-col w-72 bg-gray-100 border border-primary-500 py-6 px-8 rounded-lg mr-auto mt-6">
                      <strong className="text-lg">
                        Entidade:{" "}
                        <span className="font-normal text-lg">22222222</span>
                      </strong>
                      <strong className="text-lg">
                        Referência:{" "}
                        <span className="font-normal text-lg">22222222</span>
                      </strong>
                      <strong className="text-lg">
                        Valor:{" "}
                        <span className="font-normal text-lg">9,95€</span>
                      </strong>
                    </div>
                  </div>
                </RadixRadioGroup.Root>
              </div>
            </div>
          </section>
        </div>

        <section className="w-80 flex flex-col">
          <div>
            <strong className="text-lg flex flex-col gap-5">
              O seu pedido:{" "}
              <span className="font-normal text-lg">1x Procuração</span>
            </strong>
          </div>

          <div className="w-full bg-primary-300 h-[1px] my-9" />

          <div>
            <strong className="text-xl">
              Total <span className="text-xl font-normal">com IVA:</span> 9.95€
            </strong>

            <div className="flex items-center mt-5">
              <Checkbox.Root
                className="flex h-5 w-5 bg-gray-200 appearance-none items-center justify-center rounded-[4px] shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
                defaultChecked
                disabled
                id="c1"
              >
                <Checkbox.Indicator className="text-primary-500">
                  <CheckIcon className="h-6 w-6" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                className="pl-5 text-sm leading-none text-gray-400"
                htmlFor="c1"
              >
                Declaro que li a{" "}
                <span className="text-sm text-primary-500">
                  Política de Privacidade
                </span>
                , e aceito os{" "}
                <span className="text-sm text-primary-500">
                  Termos e Condições.
                </span>
              </label>
            </div>

            <button
              className={`flex items-center justify-center w-80 h-12 py-3 mt-7 font-bold text-lg rounded-lg transition-colors duration-300 text-white bg-primary-500 hover:bg-primary-400 ${
                isSubmitButtonDisable && "bg-gray-400 cursor-not-allowed"
              }`}
              type="submit"
              disabled={isSubmitButtonDisable}
            >
              Finalizar Pagamento
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}
