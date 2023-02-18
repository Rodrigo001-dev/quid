import { useWizard } from "react-use-wizard";

import { Modal } from "../Modal";

export function FirstStep() {
  const { nextStep } = useWizard();

  return (
    <Modal
      title="O que é uma procuração?"
      description="“Através de uma procuração, pode conferir poderes a um procurador, para que o procurador aja em seu nome dentro dos limites dos poderes conferidos.”"
      firstButtonContent="Compreendi"
      onClickFirstButton={() => nextStep()}
    />
  );
}
