import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { Toast } from "@/components/shared/Toast";

import { usePersonData } from "@/store/usePersonData";

interface CurrentResidenceStepProps {
  isCheckAllDataStep?: boolean;
}

export function CurrentResidenceStep({
  isCheckAllDataStep,
}: CurrentResidenceStepProps) {
  const personHabitualResidence = usePersonData(
    (state) => state.personHabitualResidence
  );

  const setPersonHabitualResidence = usePersonData(
    (state) => state.setPersonHabitualResidence
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (personHabitualResidence.trim() === "") {
      return Toast({
        message: "O campo da sua residência habitual é obrigatório",
      });
    }

    nextStep();
  }

  return (
    <GenericStep
      title="Por favor, indique a sua residência habitual."
      isCheckAllDataStep={isCheckAllDataStep}
      firstButtonContent="Sim."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“O texto que redige aqui é integrado seu documento final.”"
    >
      <textarea
        placeholder="Morada completa"
        className="max-w-[18rem] sm:max-w-lg md:max-w-[630px] resize-none bg-[#F3F3F3] text-text-500 text-lg font-normal border-2 border-primary-500 pl-6 pr-3 py-5 rounded-lg ml-4 mb-6 md:ml-0"
        id="habitualResidence"
        cols={59}
        rows={4}
        autoFocus={!isCheckAllDataStep ? true : false}
        value={personHabitualResidence}
        onChange={(event) => setPersonHabitualResidence(event.target.value)}
      />
    </GenericStep>
  );
}
