import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";

export function ThirdStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Quais os poderes que pretende conferir?"
      firstButtonContent="Sim."
      onClickFirstButton={() => nextStep()}
      instructions="“[…] conferindo-lhe os poderes necessários para, em nome e por conta da/o Mandante, [texto dinamicamente alterado à medida que o user escreve no campo designado]”"
    >
      <textarea
        className="max-w-[630px] resize-none bg-[#F3F3F3] text-text-500 text-lg font-normal border-2 border-primary-500 pl-6 pr-3 py-5 rounded-lg mb-6"
        id="poderes"
        cols={59}
        rows={4}
        autoFocus
      />
    </GenericStep>
  );
}
