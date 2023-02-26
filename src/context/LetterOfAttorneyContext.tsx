import { createContext, ReactNode, useState } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
} from "@react-pdf/renderer";

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
    return (
      <PDFDownloadLink
        document={
          <Document>
            <Page>
              <View>
                <Text>Nome: {personName}</Text>
                <Text>dados: {personMaritalStatus}</Text>
                <Text>Endereço: {personHabitualResidence}</Text>
              </View>
            </Page>
          </Document>
        }
        fileName="procuração.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Gerando PDF..." : "Download do PDF"
        }
      </PDFDownloadLink>
    );
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
        generatePDF,
      }}
    >
      {children}
    </LetterOfAttorneyContext.Provider>
  );
};
