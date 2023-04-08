import { useEffect } from "react";
import { useWizard } from "react-use-wizard";
import * as Label from "@radix-ui/react-label";

import { GenericStep } from "@/components/wizards/GenericStep";
import { RadioGroup } from "@/components/wizards/RadioGroup";
import { Toast } from "@/components/shared/Toast";

import { useAttorneyData } from "@/store/useAttorneyData";

interface AdditionalInformationStepProps {
  isCheckAllDataStep?: boolean;
}

export function AdditionalInformationStep({
  isCheckAllDataStep,
}: AdditionalInformationStepProps) {
  const replaceWithSomeoneElse = useAttorneyData(
    (state) => state.replaceWithSomeoneElse
  );
  const concludeBusinessWithYourself = useAttorneyData(
    (state) => state.concludeBusinessWithYourself
  );

  const setReplaceWithSomeoneElse = useAttorneyData(
    (state) => state.setReplaceWithSomeoneElse
  );

  const setConcludeBusinessWithYourself = useAttorneyData(
    (state) => state.setConcludeBusinessWithYourself
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (!replaceWithSomeoneElse || !concludeBusinessWithYourself) {
      return Toast({
        message: "Todos os campos são obrigatórios",
      });
    }

    nextStep();
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="Algumas informações adicionais sobre o procurador"
      isCheckAllDataStep={isCheckAllDataStep}
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“O representante pode fazer-se substituir por outrem se o representado o permitir ou se isso resultar da procuração.” <br /><br /> “O procurador só pode celebrar negócio consigo mesmo (ou seja, com o procurador) se o representado consentir.”"
      legalBase="Art. 264.º, n.º 1 do CC"
    >
      <div className="grid grid-rows-3 gap-5 justify-center">
        <section className="ml-5">
          <Label.Root
            className="text-base font-semibold leading-[35px] text-text-500"
            htmlFor="replaceWithSomeoneElse"
          >
            O procurador pode fazer-se substituir por outra pessoa?
          </Label.Root>
          <RadioGroup
            radioGroupId="replaceWithSomeoneElse"
            ariaLabel="procurador se substituir por outra pessoa"
            firstRadioValue="Sim"
            secondRadioValue="Não"
            value={replaceWithSomeoneElse}
            onValueChange={(value) => setReplaceWithSomeoneElse(value)}
          />
        </section>

        <section className="ml-5">
          <Label.Root
            className="text-base font-semibold leading-[35px] text-text-500"
            htmlFor="concludeBusinessWithYourself"
          >
            O procurador pode celebrar negócios consigo mesmo?
          </Label.Root>
          <RadioGroup
            radioGroupId="concludeBusinessWithYourself"
            ariaLabel="procurador celebrar negócios consigo mesmo"
            firstRadioValue="Sim"
            secondRadioValue="Não"
            value={concludeBusinessWithYourself}
            onValueChange={(value) => setConcludeBusinessWithYourself(value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
