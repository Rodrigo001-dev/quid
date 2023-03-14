import { useWizard } from "react-use-wizard";

import { Modal } from "../Modal";

export function SecondStep() {
  const { nextStep, previousStep } = useWizard();

  return (
    <Modal
      title="Como pode ser a representação"
      description="“A representação pode ser legal ou voluntária: é voluntária a representação se os poderes forem conferidos ao procurador para que este o represente a si; é legal a representação se resultar da lei. São exemplos de representação legal a representação de menores e maiores por imposição legal e de pessoas coletivas (ou seja, empresas, associações, fundações) pelos seus gerentes ou administradores.”"
      firstButtonContent="Voltar"
      onClickFirstButton={() => previousStep()}
      secondButtonContent="Compreendi"
      onClickSecondButton={() => nextStep()}
    />
  );
}
