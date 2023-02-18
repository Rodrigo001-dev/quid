import { useState } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { Modal } from "../../Modal";

export function AdministratorOrManagerStep() {
  const { nextStep } = useWizard();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GenericStep
      title="Atua como administrador ou gerente?"
      firstButtonContent="Sim."
      onClickFirstButton={() => setIsModalOpen(true)}
      secondButtonContent="Não, atuo a título pessoal."
      onClickSecondButton={() => nextStep()}
      instructions="“As empresas, associações e as fundações também podem ser representadas por procuradores. Neste caso, os poderes devem ser conferidos pelos administradores ou gerentes, consoante o caso, e estar de acordo com os estatutos ou pacto social da empresa, associação ou fundação.”"
    >
      <Modal
        title="Desculpe"
        description="“Estamos a trabalhar para dar-lhe as ferramentas úteis à representação enquanto administrador ou gerente. Em breve, daremos novidades!” "
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </GenericStep>
  );
}
