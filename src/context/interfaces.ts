import { Dispatch, SetStateAction } from "react";

export interface LetterOfAttorneyContextData {
  powers: string;
  setPowers: Dispatch<SetStateAction<string>>;
  personName: string;
  setPersonName: Dispatch<SetStateAction<string>>;
  personMaritalStatus: string | undefined;
  setPersonMaritalStatus: Dispatch<SetStateAction<string | undefined>>;
  personGender: string | undefined;
  setPersonGender: Dispatch<SetStateAction<string | undefined>>;
  personNationality: string;
  setPersonNationality: Dispatch<SetStateAction<string>>;
  personCountry: string | undefined;
  setPersonCountry: Dispatch<SetStateAction<string | undefined>>;
  personConcelho: string | undefined;
  setPersonConcelho: Dispatch<SetStateAction<string | undefined>>;
  personFreguesia: string | undefined;
  setPersonFreguesia: Dispatch<SetStateAction<string | undefined>>;
  registrationCalendar: string;
  setRegistrationCalendar: Dispatch<SetStateAction<string>>;
  taxIdentificationNumber: string;
  setTaxIdentificationNumber: Dispatch<SetStateAction<string>>;
  personIdentificationNumber: string;
  setPersonIdentificationNumber: Dispatch<SetStateAction<string>>;
  personDocument: string | undefined;
  setPersonDocument: Dispatch<SetStateAction<string | undefined>>;
  personIssuingCountry: string | undefined;
  setPersonIssuingCountry: Dispatch<SetStateAction<string | undefined>>;
  personHabitualResidence: string;
  setPersonHabitualResidence: Dispatch<SetStateAction<string>>;

  attorneyName: string;
  setAttorneyName: Dispatch<SetStateAction<string>>;
  attorneyMaritalStatus: string | undefined;
  setAttorneyMaritalStatus: Dispatch<SetStateAction<string | undefined>>;
  attorneyGender: string | undefined;
  setAttorneyGender: Dispatch<SetStateAction<string | undefined>>;
  attorneyNationality: string;
  setAttorneyNationality: Dispatch<SetStateAction<string>>;
  attorneyCountry: string | undefined;
  setAttorneyCountry: Dispatch<SetStateAction<string | undefined>>;
  attorneyConcelho: string | undefined;
  setAttorneyConcelho: Dispatch<SetStateAction<string | undefined>>;
  attorneyFreguesia: string | undefined;
  setAttorneyFreguesia: Dispatch<SetStateAction<string | undefined>>;
  attorneyRegistrationCalendar: string;
  setAttorneyRegistrationCalendar: Dispatch<SetStateAction<string>>;
  attorneyTaxIdentificationNumber: string;
  setAttorneyTaxIdentificationNumber: Dispatch<SetStateAction<string>>;
  attorneyIdentificationNumber: string;
  setAttorneyIdentificationNumber: Dispatch<SetStateAction<string>>;
  attorneyDocument: string | undefined;
  setAttorneyDocument: Dispatch<SetStateAction<string | undefined>>;
  attorneyIssuingCountry: string | undefined;
  setAttorneyIssuingCountry: Dispatch<SetStateAction<string | undefined>>;
  attorneyHabitualResidence: string;
  setAttorneyHabitualResidence: Dispatch<SetStateAction<string>>;
  dateOfPowerOfAttorney: string;
  setDateOfPowerOfAttorney: Dispatch<SetStateAction<string>>;
  dateOfAttorney: string;
  setDateOfAttorney: Dispatch<SetStateAction<string>>;
  placeOfAttorney: string;
  setPlaceOfAttorney: Dispatch<SetStateAction<string>>;
  replaceWithSomeoneElse: string | undefined;
  setReplaceWithSomeoneElse: Dispatch<SetStateAction<string | undefined>>;
  concludeBusinessWithYourself: string | undefined;
  setConcludeBusinessWithYourself: Dispatch<SetStateAction<string | undefined>>;
  makePayment(
    email: string,
    alias: string,
    customerName: string
  ): Promise<void>;
}
