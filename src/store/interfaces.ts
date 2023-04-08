export interface PersonData {
  powers: string;
  personName: string;
  personMaritalStatus: string | undefined;
  personGender: string | undefined;
  personNationality: string;
  personCountry: string | undefined;
  personConcelho: string | undefined;
  personFreguesia: string | undefined;
  registrationCalendar: string;
  taxIdentificationNumber: string;
  personIdentificationNumber: string;
  personDocument: string | undefined;
  personIssuingCountry: string | undefined;
  personHabitualResidence: string;
  setPowers: (powers: string) => void;
  setPersonName: (name: string) => void;
  setPersonMaritalStatus: (personMaritalStatus: string | undefined) => void;
  setPersonGender: (personGender: string | undefined) => void;
  setPersonNationality: (personNationality: string) => void;
  setPersonCountry: (personCountry: string | undefined) => void;
  setPersonConcelho: (personConcelho: string | undefined) => void;
  setPersonFreguesia: (personFreguesia: string | undefined) => void;
  setRegistrationCalendar: (registrationCalendar: string) => void;
  setTaxIdentificationNumber: (taxIdentificationNumber: string) => void;
  setPersonIdentificationNumber: (personIdentificationNumber: string) => void;
  setPersonDocument: (personDocument: string | undefined) => void;
  setPersonIssuingCountry: (personIssuingCountry: string | undefined) => void;
  setPersonHabitualResidence: (personHabitualResidence: string) => void;
}

interface AttorneyData {
  attorneyName: string;
  attorneyMaritalStatus: string | undefined;
  attorneyGender: string | undefined;
  attorneyNationality: string;
  attorneyCountry: string | undefined;
  attorneyConcelho: string | undefined;
  attorneyFreguesia: string | undefined;
  attorneyRegistrationCalendar: string;
  attorneyTaxIdentificationNumber: string;
  attorneyIdentificationNumber: string;
  attorneyDocument: string | undefined;
  attorneyIssuingCountry: string | undefined;
  attorneyHabitualResidence: string;
}

export interface AttorneyDataState {
  attorneyName: string;
  attorneyMaritalStatus: string | undefined;
  attorneyGender: string | undefined;
  attorneyNationality: string;
  attorneyCountry: string | undefined;
  attorneyConcelho: string | undefined;
  attorneyFreguesia: string | undefined;
  attorneyRegistrationCalendar: string;
  attorneyTaxIdentificationNumber: string;
  attorneyIdentificationNumber: string;
  attorneyDocument: string | undefined;
  attorneyIssuingCountry: string | undefined;
  attorneyHabitualResidence: string;
  replaceWithSomeoneElse: string | undefined;
  concludeBusinessWithYourself: string | undefined;
  attorneys: AttorneyData[];
  setAttorneyName: (name: string) => void;
  setAttorneyMaritalStatus: (attorneyMaritalStatus: string | undefined) => void;
  setAttorneyGender: (attorneyGender: string | undefined) => void;
  setAttorneyNationality: (attorneyNationality: string) => void;
  setAttorneyCountry: (attorneyCountry: string | undefined) => void;
  setAttorneyConcelho: (attorneyConcelho: string | undefined) => void;
  setAttorneyFreguesia: (attorneyFreguesia: string | undefined) => void;
  setAttorneyRegistrationCalendar: (
    attorneyRegistrationCalendar: string
  ) => void;
  setAttorneyTaxIdentificationNumber: (
    attorneyTaxIdentificationNumber: string
  ) => void;
  setAttorneyIdentificationNumber: (
    attorneyIdentificationNumber: string
  ) => void;
  setAttorneyDocument: (attorneyDocument: string | undefined) => void;
  setAttorneyIssuingCountry: (
    attorneyIssuingCountry: string | undefined
  ) => void;
  setAttorneyHabitualResidence: (attorneyHabitualResidence: string) => void;
  setReplaceWithSomeoneElse: (
    replaceWithSomeoneElse: string | undefined
  ) => void;
  setConcludeBusinessWithYourself: (
    concludeBusinessWithYourself: string | undefined
  ) => void;
  setAttorneys: (attorneys: AttorneyData[]) => void;
}

export interface LetterOfAttorney {
  dateOfPowerOfAttorney: string;
  dateOfAttorney: string;
  placeOfAttorney: string;
  setDateOfPowerOfAttorney: (dateOfPowerOfAttorney: string) => void;
  setDateOfAttorney: (dateOfAttorney: string) => void;
  setPlaceOfAttorney: (placeOfAttorney: string) => void;
}
