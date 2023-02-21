import { useState } from "react";
import { useWizard } from "react-use-wizard";
import * as Label from "@radix-ui/react-label";

import { GenericStep } from "@/components/Wizards/GenericStep";
import { InputAndLabel } from "@/components/Wizards/InputAndLabel";
import { RadioGroup } from "@/components/Wizards/RadioGroup";

export function AttorneyPersonalDataStep() {
  const [attorneyName, setAttorneyName] = useState("");

  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Por favor, Introduza os dados pessoais do procurador"
      firstButtonContent="Continuar."
      onClickFirstButton={() => nextStep()}
      instructions="“O procurador tem a faculdade de celebrar os atos ou negócios em nome do mandate dentro dos limites conferidos pela procuração.”"
      legalBase="Art. 46.º, n.º 1, al. c) do CN"
    >
      <div className="w-screen max-w-[720px] grid grid-cols-3 mb-6">
        <section>
          <InputAndLabel
            id="attorneyName"
            labelContent="Nome do procurador"
            placeholder="Nome completo"
            value={attorneyName}
            onChange={(event) => setAttorneyName(event.target.value)}
          />
        </section>

        <section>
          <Label.Root
            className="text-base font-semibold leading-[35px] text-text-500"
            htmlFor="maritalStatus"
          >
            Estado civil do procurador
          </Label.Root>
          <RadioGroup
            radioGroupId="maritalStatus"
            ariaLabel="Estado civil"
            firstRadioValue="Solteiro(a)."
            secondRadioValue="Casado(a)."
            thirdRadioValue="Unido(a) de facto."
            fourthRadioValue="Divorciado(a)."
            fifthRadioValue="Viúvo(a)."
          />
        </section>

        <section>
          <Label.Root
            className="text-base font-semibold leading-[35px] text-text-500"
            htmlFor="gender"
          >
            Como o procurador prefere ser tratado?
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
