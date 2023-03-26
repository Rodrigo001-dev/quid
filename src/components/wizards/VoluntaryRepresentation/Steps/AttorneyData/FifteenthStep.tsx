import { useEffect } from "react";
import { useWizard } from "react-use-wizard";
import * as Label from "@radix-ui/react-label";

import { GenericStep } from "@/components/wizards/GenericStep";
import { RadioGroup } from "@/components/wizards/RadioGroup";
import { InputAndLabel } from "@/components/wizards/InputAndLabel";
import { Toast } from "@/components/shared/Toast";

import { useLetterOfAttorney } from "@/store/useLetterOfAttorney";
import { useAdditionalInformation } from "@/store/useAdditionalInformation";

interface AdditionalInformationStepProps {
  isCheckAllDataStep?: boolean;
}

export function AdditionalInformationStep({
  isCheckAllDataStep,
}: AdditionalInformationStepProps) {
  const dateOfPowerOfAttorney = useLetterOfAttorney(
    (state) => state.dateOfPowerOfAttorney
  );
  const dateOfAttorney = useLetterOfAttorney((state) => state.dateOfAttorney);
  const placeOfAttorney = useLetterOfAttorney((state) => state.placeOfAttorney);
  const replaceWithSomeoneElse = useAdditionalInformation(
    (state) => state.replaceWithSomeoneElse
  );
  const concludeBusinessWithYourself = useAdditionalInformation(
    (state) => state.concludeBusinessWithYourself
  );

  const setDateOfPowerOfAttorney = useLetterOfAttorney(
    (state) => state.setDateOfPowerOfAttorney
  );
  const setDateOfAttorney = useLetterOfAttorney(
    (state) => state.setDateOfAttorney
  );
  const setPlaceOfAttorney = useLetterOfAttorney(
    (state) => state.setPlaceOfAttorney
  );
  const setReplaceWithSomeoneElse = useAdditionalInformation(
    (state) => state.setReplaceWithSomeoneElse
  );
  const setConcludeBusinessWithYourself = useAdditionalInformation(
    (state) => state.setConcludeBusinessWithYourself
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (
      dateOfPowerOfAttorney.trim() === "" ||
      dateOfAttorney.trim() === "" ||
      placeOfAttorney.trim() === "" ||
      !replaceWithSomeoneElse ||
      !concludeBusinessWithYourself
    ) {
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
      title="Algumas informações adicionais sobre o(s) procurador(es)"
      isCheckAllDataStep={isCheckAllDataStep}
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“O representante pode fazer-se substituir por outrem se o representado o permitir ou se isso resultar da procuração.” <br /><br /> “O procurador só pode celebrar negócio consigo mesmo (ou seja, com o procurador) se o representado consentir.” <br /><br /> “A data de produção de efeitos é a data a partir da qual o procurador pode agir em nome do representado ao abrigo desta procuração.” <br /><br /> “Por favor, indique a data que pretende dar à procuração e o local em que a deverá assinar. Os documentos devem ter a data da sua assinatura.”"
      legalBase="Art. 264.º, n.º 1 do CC <br />Art. 261.º, n.º 1 do CC"
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

        <section>
          <InputAndLabel
            id="dateOfPowerOfAttorney"
            labelContent="A partir de que data a produção deve produzir efeitos?"
            placeholder="Data de efeito da procuração"
            type="date"
            value={dateOfPowerOfAttorney}
            onChange={(event) => setDateOfPowerOfAttorney(event.target.value)}
          />
        </section>

        <section className="mb-6 grid grid-rows-1 md:grid-cols-2">
          <InputAndLabel
            id="dateOfAttorney"
            labelContent="Qual a data da procuração?"
            placeholder="Selecione a data da procuração"
            type="date"
            value={dateOfAttorney}
            onChange={(event) => setDateOfAttorney(event.target.value)}
          />

          <InputAndLabel
            id="placeOfAttorney"
            labelContent="Qual o local da procuração?"
            placeholder="Digite o local"
            value={placeOfAttorney}
            onChange={(event) => setPlaceOfAttorney(event.target.value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
