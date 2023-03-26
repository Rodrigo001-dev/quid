import { useWizard } from "react-use-wizard";

import { usePersonData } from "@/store/usePersonData";

import { GenericStep } from "../../../GenericStep";
import { Toast } from "@/components/shared/Toast";
import { useEffect } from "react";

interface PowersIntendsConferProps {
  isCheckAllDataStep?: boolean;
}

export function PowersIntendsConfer({
  isCheckAllDataStep,
}: PowersIntendsConferProps) {
  const powers = usePersonData((state) => state.powers);
  const setPowers = usePersonData((state) => state.setPowers);

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (powers.trim() === "") {
      return Toast({
        message: "O campo dos poderes que pretende conferir é obrigatório",
      });
    }

    nextStep();
  }

  return (
    <GenericStep
      isCheckAllDataStep={isCheckAllDataStep}
      title="Quais os poderes que pretende conferir?"
      firstButtonContent="Sim."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="Certifique-se de que concretiza com suficiência os poderes (o “o quê?”) e o fim da atribuição de poderes (o “para quê?”). <br/><br/> Caso pretenda conferir poderes para doar um bem, certifique-se de que concretiza com suficiência o bem e a pessoa a quem o bem será doado. Ao procurador não será permitido designar a quem é feita doação ou determinar o que é doado <br/><br/> “[…] conferindo-lhe os poderes necessários para, em nome e por conta da/o Mandante”"
    >
      <textarea
        className="max-w-[18rem] sm:max-w-lg md:max-w-[630px] resize-none bg-[#F3F3F3] text-text-500 text-lg font-normal border-2 border-primary-500 pl-6 pr-3 py-5 rounded-lg ml-4 mb-6 md:ml-0"
        id="poderes"
        placeholder="Digite os poderes"
        cols={59}
        rows={4}
        autoFocus={!isCheckAllDataStep ? true : false}
        value={powers}
        onChange={(event) => setPowers(event.target.value)}
      />
    </GenericStep>
  );
}
