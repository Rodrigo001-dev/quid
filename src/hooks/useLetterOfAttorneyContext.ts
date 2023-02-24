import { LetterOfAttorneyContext } from "@/context/LetterOfAttorneyContext";
import { useContext } from "react";

export function useLetterOfAttorneyContext() {
  const {
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
  } = useContext(LetterOfAttorneyContext);

  return {
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
  };
}