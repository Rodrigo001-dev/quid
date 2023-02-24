import { useState } from "react";
import { useWizard } from "react-use-wizard";

import { useLetterOfAttorneyContext } from "@/hooks/useLetterOfAttorneyContext";

import { GenericStep } from "../../../GenericStep";

export function PowersIntendsConfer() {
  const { powers, setPowers } = useLetterOfAttorneyContext();

  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Quais os poderes que pretende conferir?"
      firstButtonContent="Sim."
      onClickFirstButton={() => nextStep()}
      instructions="Certifique-se de que concretiza com suficiência os poderes (o “o quê?”) e o fim da atribuição de poderes (o “para quê?”). <br/><br/> Caso pretenda conferir poderes para doar um bem, certifique-se de que concretiza com suficiência o bem e a pessoa a quem o bem será doado. Ao procurador não será permitido designar a quem é feita doação ou determinar o que é doado <br/><br/> “[…] conferindo-lhe os poderes necessários para, em nome e por conta da/o Mandante”"
    >
      <textarea
        className="max-w-[630px] resize-none bg-[#F3F3F3] text-text-500 text-lg font-normal border-2 border-primary-500 pl-6 pr-3 py-5 rounded-lg mb-6"
        id="poderes"
        placeholder="Digite os poderes"
        cols={59}
        rows={4}
        autoFocus
        value={powers}
        onChange={(event) => setPowers(event.target.value)}
      />
    </GenericStep>
  );
}
