import { useEffect } from "react";
import { useWizard } from "react-use-wizard";

import { Toast } from "@/components/shared/Toast";
import { GenericStep } from "../../../GenericStep";
import { useAttorneyData } from "@/store/useAttorneyData";

interface AttorneyCurrentResidenceStepProps {
  isCheckAllDataStep?: boolean;
}

export function AttorneyCurrentResidenceStep({
  isCheckAllDataStep,
}: AttorneyCurrentResidenceStepProps) {
  const attorneyHabitualResidence = useAttorneyData(
    (state) => state.attorneyHabitualResidence
  );

  const setAttorneyHabitualResidence = useAttorneyData(
    (state) => state.setAttorneyHabitualResidence
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (attorneyHabitualResidence.trim() === "") {
      return Toast({
        message: "O campo da residência habitual do procurador é obrigatório",
      });
    }

    nextStep();
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      isCheckAllDataStep={isCheckAllDataStep}
      title="Por favor, indique a residência habitual do procurador."
      firstButtonContent="Sim."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“O texto que redige aqui é integrado seu documento final.”"
    >
      <textarea
        placeholder="Morada completa"
        className="max-w-[18rem] sm:max-w-lg md:max-w-[630px] resize-none bg-[#F3F3F3] text-text-500 text-lg font-normal border-2 border-primary-500 pl-6 pr-3 py-5 rounded-lg ml-4 md:ml-5 mb-6"
        id="habitualResidence"
        cols={59}
        rows={4}
        value={attorneyHabitualResidence}
        onChange={(event) => setAttorneyHabitualResidence(event.target.value)}
      />
    </GenericStep>
  );
}
