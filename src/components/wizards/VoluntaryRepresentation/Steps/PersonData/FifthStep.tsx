import { useWizard } from "react-use-wizard";
import * as Label from "@radix-ui/react-label";

import { RadioGroup } from "../../../RadioGroup";
import { GenericStep } from "../../../GenericStep";
import { InputAndLabel } from "../../../InputAndLabel";
import { Toast } from "@/components/shared/Toast";

import { usePersonData } from "@/store/usePersonData";

interface PersonalDataStepProps {
  isCheckAllDataStep?: boolean;
}

export function PersonalDataStep({
  isCheckAllDataStep,
}: PersonalDataStepProps) {
  const personName = usePersonData((state) => state.personName);
  const personMaritalStatus = usePersonData(
    (state) => state.personMaritalStatus
  );
  const personGender = usePersonData((state) => state.personGender);

  const setPersonName = usePersonData((state) => state.setPersonName);
  const setPersonMaritalStatus = usePersonData(
    (state) => state.setPersonMaritalStatus
  );
  const setPersonGender = usePersonData((state) => state.setPersonGender);

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (personName.trim() === "" || !personMaritalStatus || !personGender) {
      return Toast({
        message: "Todos os campos são obrigatórios",
      });
    }

    nextStep();
  }

  return (
    <GenericStep
      title="Por favor, Introduza os seus dados pessoais"
      isCheckAllDataStep={isCheckAllDataStep}
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“O documento pelo qual se conferem poderes representativos deve conter a identificação do representado, ou seja, de quem confere os poderes.”"
      legalBase="Art. 46.º, n.º 1, al. c) do CN"
    >
      <div className="w-screen max-w-[720px] grid grid-cols-3 mb-6">
        <section>
          <InputAndLabel
            id="personName"
            labelContent="Indique o seu nome"
            placeholder="Nome completo"
            value={personName}
            onChange={(event) => setPersonName(event.target.value)}
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
            fourthRadioValue="Divorciado(a)."
            fifthRadioValue="Viúvo(a)."
            value={personMaritalStatus}
            onValueChange={(value) => setPersonMaritalStatus(value)}
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
            value={personGender}
            onValueChange={(value) => setPersonGender(value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
