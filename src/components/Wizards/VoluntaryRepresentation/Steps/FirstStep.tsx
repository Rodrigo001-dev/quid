import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../GenericStep";

export function FirstStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Pretende redigir uma procuração?"
      hasFirstButton
      firstButtonContent="Sim."
      onClickFirstButton={() => nextStep()}
      isPrimaryButtonFirst
      hasSecondButton
      secondButtonContent="Não tenho a certeza."
      onClickSecondButton={() => ({})}
      instructions="“Diz-se procuração o ato pelo qual alguém atribui a outrem, voluntariamente, poderes de representação. O procurador poderá agir em nome do representado dentro dos limites dos poderes conferidos.”"
      hasLegalBase
      legalBase="Art. 262.º, n.º 1 do CC"
    />
  );
}