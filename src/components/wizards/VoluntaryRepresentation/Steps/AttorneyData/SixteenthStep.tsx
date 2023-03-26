import { useEffect } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "@/components/wizards/GenericStep";

export function DeadlinePowerOfAttorneyStep() {
  const { nextStep } = useWizard();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="Pretende estipular um prazo para a procuração?"
      firstButtonContent="Sim."
      onClickFirstButton={() => {}}
      secondButtonContent="Não."
      onClickSecondButton={() => nextStep()}
      instructions="“Em regra, a procuração extingue-se pelo decurso do tempo se estipular um prazo, ou, em alternativa, se o representante renunciar à procuração e disso der conhecimento ao representado, ou, ainda, se o representado revogar a procuração e disso der conhecimento ao representante.”"
      legalBase="Art. 265.º, n.os 1 e 2 do CC"
    />
  );
}
