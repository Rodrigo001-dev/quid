import { useWizard } from "react-use-wizard";

import { GenericStep } from "@/components/Wizards/GenericStep";

export function AddMoreAttorneyStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Pretende acrescentar mais procuradores?"
      firstButtonContent="Sim"
      onClickFirstButton={() => {}}
      secondButtonContent="Não"
      onClickSecondButton={() => nextStep()}
    />
  );
}
