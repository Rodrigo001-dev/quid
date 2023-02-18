import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";

export function SecondStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Atua como administrador ou gerente?"
      firstButtonContent="Sim."
      onClickFirstButton={() => ({})}
      secondButtonContent="Não, atuo a título pessoal."
      onClickSecondButton={() => nextStep()}
      instructions="“As empresas, associações e as fundações também podem ser representadas por procuradores. Neste caso, os poderes devem ser conferidos pelos administradores ou gerentes, consoante o caso, e estar de acordo com os estatutos ou pacto social da empresa, associação ou fundação.”"
    />
  );
}