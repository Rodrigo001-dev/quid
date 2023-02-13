import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../GenericStep";

export function FourthStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="O ato ou negócio a praticar pelo procurador exige forma especial?"
      hasFirstButton
      firstButtonContent="Sim."
      onClickFirstButton={() => {}}
      hasSecondButton
      isPrimaryButtonSecond
      secondButtonContent="Não."
      onClickSecondButton={() => nextStep()}
      hasThirdButton
      thirdButtonContent="Não tenho a certeza."
      onClickThirdButton={() => {}}
      instructions="“A procuração reveste a forma exigida para o ato ou negócio que o procurador deva realizar.”"
      hasLegalBase
      legalBase="Art. 262.º, n.º 2 do CN"
    />
  );
}
