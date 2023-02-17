import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";

export function EighthStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Por favor, indique a sua residência habitual."
      firstButtonContent="Sim."
      onClickFirstButton={() => nextStep()}
      instructions="“O texto que redige aqui é integrado seu documento final.”"
    >
      <textarea
        placeholder="Morada completa"
        className="max-w-[630px] resize-none bg-[#F3F3F3] text-text-500 text-lg font-normal border-2 border-primary-500 pl-6 pr-3 py-5 rounded-lg mb-6"
        id="habitualResidence"
        cols={59}
        rows={4}
        autoFocus
      />
    </GenericStep>
  );
}
