import { createContext, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { jsPDF } from "jspdf";

import { Toast } from "@/components/shared/Toast";

import { api } from "@/services/api";

import { errorMessages } from "@/utils/errors/errorMessages";

import {
  AttorneyData,
  LetterOfAttorneyContextData,
  makePaymentParams,
} from "./interfaces";

type LetterOfAttorneyContextProps = {
  children: ReactNode;
};

export const LetterOfAttorneyContext = createContext(
  {} as LetterOfAttorneyContextData
);

export const LetterOfAttorneyContextProvider = ({
  children,
}: LetterOfAttorneyContextProps) => {
  const router = useRouter();

  // PERSON
  const [powers, setPowers] = useState("");
  const [personName, setPersonName] = useState("");
  const [personMaritalStatus, setPersonMaritalStatus] = useState<
    string | undefined
  >(undefined);
  const [personGender, setPersonGender] = useState<string | undefined>(
    undefined
  );
  const [personNationality, setPersonNationality] = useState("");
  const [personCountry, setPersonCountry] = useState<string | undefined>(
    undefined
  );
  const [personConcelho, setPersonConcelho] = useState<string | undefined>(
    undefined
  );
  const [personFreguesia, setPersonFreguesia] = useState<string | undefined>(
    undefined
  );
  const [registrationCalendar, setRegistrationCalendar] = useState("");
  const [taxIdentificationNumber, setTaxIdentificationNumber] = useState("");
  const [personIdentificationNumber, setPersonIdentificationNumber] =
    useState("");
  const [personDocument, setPersonDocument] = useState<string | undefined>(
    undefined
  );
  const [personIssuingCountry, setPersonIssuingCountry] = useState<
    string | undefined
  >(undefined);
  const [personHabitualResidence, setPersonHabitualResidence] = useState("");

  // ATTORNEY
  const [attorneyName, setAttorneyName] = useState("");
  const [attorneyMaritalStatus, setAttorneyMaritalStatus] = useState<
    string | undefined
  >(undefined);
  const [attorneyGender, setAttorneyGender] = useState<string | undefined>(
    undefined
  );
  const [attorneyNationality, setAttorneyNationality] = useState("");
  const [attorneyCountry, setAttorneyCountry] = useState<string | undefined>(
    undefined
  );
  const [attorneyConcelho, setAttorneyConcelho] = useState<string | undefined>(
    undefined
  );
  const [attorneyFreguesia, setAttorneyFreguesia] = useState<
    string | undefined
  >(undefined);
  const [attorneyRegistrationCalendar, setAttorneyRegistrationCalendar] =
    useState("");
  const [attorneyTaxIdentificationNumber, setAttorneyTaxIdentificationNumber] =
    useState("");
  const [attorneyIdentificationNumber, setAttorneyIdentificationNumber] =
    useState("");
  const [attorneyDocument, setAttorneyDocument] = useState<string | undefined>(
    undefined
  );
  const [attorneyIssuingCountry, setAttorneyIssuingCountry] = useState<
    string | undefined
  >(undefined);
  const [attorneyHabitualResidence, setAttorneyHabitualResidence] =
    useState("");
  const [attorneys, setAttorneys] = useState<AttorneyData[]>([]);

  const [dateOfPowerOfAttorney, setDateOfPowerOfAttorney] = useState("");
  const [dateOfAttorney, setDateOfAttorney] = useState("");
  const [placeOfAttorney, setPlaceOfAttorney] = useState("");
  const [replaceWithSomeoneElse, setReplaceWithSomeoneElse] = useState<
    string | undefined
  >(undefined);
  const [concludeBusinessWithYourself, setConcludeBusinessWithYourself] =
    useState<string | undefined>(undefined);

  function generatePDF() {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(
      `Eu ${personName} declaro que li tudo o que está escrito aqui, minha residencia está localizada no ${personHabitualResidence}`,
      190
    );
    doc.text(lines, 10, 10);
    return doc.output("arraybuffer");
  }

  async function makePayment({
    paymentMethod,
    email,
    alias,
    customerName,
  }: makePaymentParams) {
    try {
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
      setPowers("");

      setPersonName("");
      setPersonMaritalStatus(undefined);
      setPersonGender(undefined);
      setPersonNationality("");
      setPersonCountry(undefined);
      setPersonConcelho(undefined);
      setPersonFreguesia(undefined);
      setRegistrationCalendar(undefined);
      setTaxIdentificationNumber("");
      setPersonIdentificationNumber("");
      setPersonDocument(undefined);
      setPersonIssuingCountry(undefined);
      setPersonHabitualResidence("");

      setAttorneyName("");
      setAttorneyMaritalStatus(undefined);
      setAttorneyGender(undefined);
      setAttorneyNationality("");
      setAttorneyCountry(undefined);
      setAttorneyConcelho(undefined);
      setAttorneyFreguesia(undefined);
      setAttorneyRegistrationCalendar("");
      setAttorneyTaxIdentificationNumber("");
      setAttorneyIdentificationNumber("");
      setAttorneyDocument(undefined);
      setAttorneyIssuingCountry(undefined);
      setAttorneyHabitualResidence("");
      setAttorneys([]);

      setDateOfPowerOfAttorney("");
      setDateOfAttorney("");
      setPlaceOfAttorney("");
      setReplaceWithSomeoneElse(undefined);
      setConcludeBusinessWithYourself(undefined);
    }
  }

  return (
    <LetterOfAttorneyContext.Provider
      value={{
        // PERSON
        powers,
        setPowers,
        personName,
        setPersonName,
        personMaritalStatus,
        setPersonMaritalStatus,
        personGender,
        setPersonGender,
        personNationality,
        setPersonNationality,
        personCountry,
        setPersonCountry,
        personConcelho,
        setPersonConcelho,
        personFreguesia,
        setPersonFreguesia,
        registrationCalendar,
        setRegistrationCalendar,
        taxIdentificationNumber,
        setTaxIdentificationNumber,
        personIdentificationNumber,
        setPersonIdentificationNumber,
        personDocument,
        setPersonDocument,
        personIssuingCountry,
        setPersonIssuingCountry,
        personHabitualResidence,
        setPersonHabitualResidence,

        // ATTORNEY
        attorneyName,
        setAttorneyName,
        attorneyMaritalStatus,
        setAttorneyMaritalStatus,
        attorneyGender,
        setAttorneyGender,
        attorneyNationality,
        setAttorneyNationality,
        attorneyCountry,
        setAttorneyCountry,
        attorneyConcelho,
        setAttorneyConcelho,
        attorneyFreguesia,
        setAttorneyFreguesia,
        attorneyRegistrationCalendar,
        setAttorneyRegistrationCalendar,
        attorneyTaxIdentificationNumber,
        setAttorneyTaxIdentificationNumber,
        attorneyIdentificationNumber,
        setAttorneyIdentificationNumber,
        attorneyDocument,
        setAttorneyDocument,
        attorneyIssuingCountry,
        setAttorneyIssuingCountry,
        attorneyHabitualResidence,
        setAttorneyHabitualResidence,
        dateOfPowerOfAttorney,
        setDateOfPowerOfAttorney,
        dateOfAttorney,
        setDateOfAttorney,
        placeOfAttorney,
        setPlaceOfAttorney,
        replaceWithSomeoneElse,
        setReplaceWithSomeoneElse,
        concludeBusinessWithYourself,
        setConcludeBusinessWithYourself,
        attorneys,
        setAttorneys,
        makePayment,
      }}
    >
      {children}
    </LetterOfAttorneyContext.Provider>
  );
};
