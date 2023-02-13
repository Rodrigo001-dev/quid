import { useWizard } from "react-use-wizard";
import * as Label from "@radix-ui/react-label";

import { RadioGroup } from "../../RadioGroup";
import { GenericStep } from "../../GenericStep";
import { InputAndLabel } from "../../InputAndLabel";

export function FifthStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Por favor, Introduza os seus dados pessoais"
      hasFirstButton
      firstButtonContent="Continuar."
      isPrimaryButtonFirst
      onClickFirstButton={() => nextStep()}
      instructions="“O documento pelo qual se conferem poderes representativos deve conter a identificação do representado, ou seja, de quem confere os poderes.”"
      hasLegalBase
      legalBase="Art. 46.º, n.º 1, al. c) do CN"
    >
      <div className="w-screen max-w-[720px] grid grid-cols-3 mb-6">
        <section>
          <InputAndLabel
            id="personName"
            labelContent="Indique o seu nome"
            placeholder="Nome completo"
          />
        </section>

        <section>
          <Label.Root
            className="text-base font-semibold leading-[35px] text-text-500"
            htmlFor="maritalStatus"
          >
            Indique seu estado civil
          </Label.Root>
          <RadioGroup
            radioGroupId="maritalStatus"
            ariaLabel="Estado civil"
            firstRadioValue="Solteiro(a)."
            secondRadioValue="Casado(a)."
            thirdRadioValue="Unido(a) de facto."
            hasFourthRadio
            fourthRadioValue="Divorciado(a)."
            hasFifthRadio
            fifthRadioValue="Viúvo(a)."
          />
        </section>

        <section>
          <Label.Root
            className="text-base font-semibold leading-[35px] text-text-500"
            htmlFor="gender"
          >
            Como prefere ser tratado?
          </Label.Root>
          <RadioGroup
            radioGroupId="gender"
            ariaLabel="Gênero"
            firstRadioValue="Ele/dele"
            secondRadioValue="Ela/dela"
            thirdRadioValue="Elu/delu"
          />
        </section>
      </div>
    </GenericStep>
  );
}
