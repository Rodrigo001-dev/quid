import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AttorneyDataState } from "./interfaces";

export const useAttorneyData = create(
  persist<AttorneyDataState>(
    (set) => ({
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

      setAttorneyName: (attorneyName) => set({ attorneyName }),
      setAttorneyMaritalStatus: (attorneyMaritalStatus) =>
        set({ attorneyMaritalStatus }),
      setAttorneyGender: (attorneyGender) => set({ attorneyGender }),
      setAttorneyNationality: (attorneyNationality) =>
        set({ attorneyNationality }),
      setAttorneyCountry: (attorneyCountry) => set({ attorneyCountry }),
      setAttorneyConcelho: (attorneyConcelho) => set({ attorneyConcelho }),
      setAttorneyFreguesia: (attorneyFreguesia) => set({ attorneyFreguesia }),
      setAttorneyRegistrationCalendar: (attorneyRegistrationCalendar) =>
        set({ attorneyRegistrationCalendar }),
      setAttorneyTaxIdentificationNumber: (attorneyTaxIdentificationNumber) =>
        set({ attorneyTaxIdentificationNumber }),
      setAttorneyIdentificationNumber: (attorneyIdentificationNumber) =>
        set({ attorneyIdentificationNumber }),
      setAttorneyDocument: (attorneyDocument) => set({ attorneyDocument }),
      setAttorneyIssuingCountry: (attorneyIssuingCountry) =>
        set({ attorneyIssuingCountry }),
      setAttorneyHabitualResidence: (attorneyHabitualResidence) =>
        set({ attorneyHabitualResidence }),
      setAttorneys: (attorneys) => set({ attorneys }),
    }),
    { name: "attorney-data-storage" }
  )
);
