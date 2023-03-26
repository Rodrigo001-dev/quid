import { useEffect, useState } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { Modal } from "../../Modal";

export function SpecialCaseStep() {
  const { nextStep } = useWizard();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="O ato ou negócio a praticar pelo procurador exige forma especial?"
      firstButtonContent="Sim."
      onClickFirstButton={() => setIsModalOpen(true)}
      secondButtonContent="Não."
      onClickSecondButton={() => nextStep()}
      thirdButtonContent="Não tenho a certeza."
      onClickThirdButton={() => setIsSecondModalOpen(true)}
      instructions="“A procuração reveste a forma exigida para o ato ou negócio que o procurador deva realizar.”"
      legalBase="Art. 262.º, n.º 2 do CN"
    >
      <Modal
        title="Forma especial"
        description="“O documento que resultar da utilização da Quid não revestirá forma especial. Se o ato ou negócio a realizar exigir forma especial, deverá contactar um notário, advogado ou solicitador.”"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Modal
        title="Sobre os casos especiais"
        description="“Em alguns casos, a procuração está sujeita a forma ou requisitos especiais. A procuração para venda de um terreno, por exemplo, deve ser feita por instrumento público ou documento particular autenticado. O documento que redigir através da Quid não revestirá qualquer forma especial, e a Quid não revê nem interpreta o texto ou informação que submeter. Caso não tenha a certeza sobre se o ato ou negócio a realizar está sujeito a forma especial deve contactar um advogado e as entidades a quem procuração deve ser apresentada.”"
        open={isSecondModalOpen}
        onClose={() => setIsSecondModalOpen(false)}
      />
    </GenericStep>
  );
}
