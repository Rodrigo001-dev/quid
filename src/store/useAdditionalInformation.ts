import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AdditionalInformation } from "./interfaces";

export const useAdditionalInformation = create(
  persist<AdditionalInformation>(
    (set) => ({
      replaceWithSomeoneElse: undefined,
      concludeBusinessWithYourself: undefined,

      setReplaceWithSomeoneElse: (replaceWithSomeoneElse) =>
        set({ replaceWithSomeoneElse }),
      setConcludeBusinessWithYourself: (concludeBusinessWithYourself) =>
        set({ concludeBusinessWithYourself }),
    }),
    { name: "additional-information-storage" }
  )
);
