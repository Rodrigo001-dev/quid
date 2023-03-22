import { create } from "zustand";
import { persist } from "zustand/middleware";

import { LetterOfAttorney } from "./interfaces";

export const useLetterOfAttorney = create(
  persist<LetterOfAttorney>(
    (set) => ({
      dateOfAttorney: "",
      dateOfPowerOfAttorney: "",
      placeOfAttorney: "",

      setDateOfAttorney: (dateOfAttorney) => set({ dateOfAttorney }),
      setDateOfPowerOfAttorney: (dateOfPowerOfAttorney) =>
        set({ dateOfPowerOfAttorney }),
      setPlaceOfAttorney: (placeOfAttorney) => set({ placeOfAttorney }),
    }),
    { name: "letter-of-attorney-storage" }
  )
);
