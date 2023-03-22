import { create } from "zustand";
import { persist } from "zustand/middleware";

import { PersonData } from "./interfaces";

export const usePersonData = create(
  persist<PersonData>(
    (set) => ({
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

      setPowers: (powers) => set({ powers }),
      setPersonName: (personName) => set({ personName }),
      setPersonMaritalStatus: (personMaritalStatus) =>
        set({ personMaritalStatus }),
      setPersonGender: (personGender) => set({ personGender }),
      setPersonNationality: (personNationality) => set({ personNationality }),
      setPersonCountry: (personCountry) => set({ personCountry }),
      setPersonConcelho: (personConcelho) => set({ personConcelho }),
      setPersonFreguesia: (personFreguesia) => set({ personFreguesia }),
      setRegistrationCalendar: (registrationCalendar) =>
        set({ registrationCalendar }),
      setTaxIdentificationNumber: (taxIdentificationNumber) =>
        set({ taxIdentificationNumber }),
      setPersonIdentificationNumber: (personIdentificationNumber) =>
        set({ personIdentificationNumber }),
      setPersonDocument: (personDocument) => set({ personDocument }),
      setPersonIssuingCountry: (personIssuingCountry) =>
        set({ personIssuingCountry }),
      setPersonHabitualResidence: (personHabitualResidence) =>
        set({ personHabitualResidence }),
    }),
    { name: "person-data-storage" }
  )
);
