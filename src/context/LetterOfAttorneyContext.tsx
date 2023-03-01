import { createContext, ReactNode, useState } from "react";
import { jsPDF } from "jspdf";

import { api } from "@/services/api";

import { LetterOfAttorneyContextData } from "./interfaces";

type LetterOfAttorneyContextProps = {
  children: ReactNode;
};

export const LetterOfAttorneyContext = createContext(
  {} as LetterOfAttorneyContextData
);

export const LetterOfAttorneyContextProvider = ({
  children,
}: LetterOfAttorneyContextProps) => {
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

  async function makePayment(
    email: string,
    alias: string,
    customerName: string
  ) {
    try {
      const pdfBytes = generatePDF();
      const pdfBase64 = Buffer.from(pdfBytes).toString("base64");

      await api.post("api/payment", {
        email,
        alias,
        customerName,
        content: pdfBase64,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: LetterOfAttorneyContext.tsx:131 ~ createPayment ~ error:",
        error
      );
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
        makePayment,
      }}
    >
      {children}
    </LetterOfAttorneyContext.Provider>
  );
};
