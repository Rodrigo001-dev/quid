import { useWizard } from "react-use-wizard";
import * as Label from "@radix-ui/react-label";

import { GenericStep } from "@/components/wizards/GenericStep";
import { InputAndLabel } from "@/components/wizards/InputAndLabel";
import { RadioGroup } from "@/components/wizards/RadioGroup";
import { Toast } from "@/components/shared/Toast";

import { useAttorneyData } from "@/store/useAttorneyData";

interface AttorneyPersonalDataStepProps {
  isCheckAllDataStep?: boolean;
}

export function AttorneyPersonalDataStep({
  isCheckAllDataStep,
}: AttorneyPersonalDataStepProps) {
  const attorneyName = useAttorneyData((state) => state.attorneyName);
  const attorneyMaritalStatus = useAttorneyData(
    (state) => state.attorneyMaritalStatus
  );
  const attorneyGender = useAttorneyData((state) => state.attorneyGender);

  const setAttorneyName = useAttorneyData((state) => state.setAttorneyName);
  const setAttorneyMaritalStatus = useAttorneyData(
    (state) => state.setAttorneyMaritalStatus
  );
  const setAttorneyGender = useAttorneyData((state) => state.setAttorneyGender);

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (
      attorneyName.trim() === "" ||
      !attorneyMaritalStatus ||
      !attorneyGender
    ) {
      return Toast({
        message: "Todos os campos são obrigatórios",
      });
    }

    nextStep();
  }

  return (
    <GenericStep
      isCheckAllDataStep={isCheckAllDataStep}
      title="Por favor, Introduza os dados pessoais do procurador"
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“O procurador tem a faculdade de celebrar os atos ou negócios em nome do mandate dentro dos limites conferidos pela procuração.”"
      legalBase="Art. 46.º, n.º 1, al. c) do CN"
    >
      <div className="w-screen max-w-[720px] grid grid-rows-1 gap-5 justify-center md:gap-0 md:grid-cols-3 mb-6">
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
            value={attorneyMaritalStatus}
            onValueChange={(value) => setAttorneyMaritalStatus(value)}
          />
        </section>

        <section>
          <Label.Root
            className="text-base font-semibold leading-[35px] text-text-500"
            htmlFor="gender"
          >
            Como ele prefere ser tratado?
          </Label.Root>
          <RadioGroup
            radioGroupId="gender"
            ariaLabel="Gênero"
            firstRadioValue="Ele/dele"
            secondRadioValue="Ela/dela"
            thirdRadioValue="Elu/delu"
            value={attorneyGender}
            onValueChange={(value) => setAttorneyGender(value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
