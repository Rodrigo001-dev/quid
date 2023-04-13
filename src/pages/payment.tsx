import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { api } from "@/services/api";

import { Toast } from "@/components/shared/Toast";
import { ShippingData } from "@/components/pages/payment/ShippingData";
import { PaymentMethodSection } from "@/components/pages/payment/PaymentMethod";
import { SubmitSection } from "@/components/pages/payment/SubmitSection";

import { usePersonData } from "@/store/usePersonData";
import { useAttorneyData } from "@/store/useAttorneyData";
import { useLetterOfAttorney } from "@/store/useLetterOfAttorney";

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
        replaceWithSomeoneElse: undefined,
        concludeBusinessWithYourself: undefined,
        attorneys: [],
      });

      useLetterOfAttorney.setState({
        dateOfAttorney: "",
        dateOfPowerOfAttorney: "",
        placeOfAttorney: "",
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
    <main className="max-w-6xl m-auto mt-28 overflow-x-hidden">
      <h1 className="flex items-center justify-center text-3xl font-bold text-primary-500 mb-4">
        Estamos quase a finalizar...
      </h1>
      <form
        role="form"
        onSubmit={handleSubmitPayment}
        className="flex flex-col xl:flex-row items-center xl:items-start mb-5"
      >
        <div className="flex flex-col max-w-xl mx-32 gap-14 mb-11">
          <ShippingData
            customerName={customerName}
            setCustomerName={setCustomerName}
            email={email}
            setEmail={setEmail}
          />

          <PaymentMethodSection
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            alias={alias}
            setAlias={setAlias}
          />
        </div>

        <section className="w-72 sm-mim:w-80 flex flex-col">
          <div>
            <strong className="text-lg flex flex-col gap-5">
              O seu pedido:{" "}
              <span className="font-normal text-lg">1x Procuração</span>
            </strong>
          </div>

          <div className="w-full bg-primary-300 h-[1px] my-9" />

          <SubmitSection isSubmitButtonDisable={isSubmitButtonDisable} />
        </section>
      </form>
    </main>
  );
}
