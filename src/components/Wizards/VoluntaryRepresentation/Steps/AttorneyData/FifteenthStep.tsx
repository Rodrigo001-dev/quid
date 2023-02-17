import { useWizard } from "react-use-wizard";
import * as Label from "@radix-ui/react-label";

import { GenericStep } from "@/components/Wizards/GenericStep";
import { RadioGroup } from "@/components/Wizards/RadioGroup";
import { InputAndLabel } from "@/components/Wizards/InputAndLabel";

export function FifteenthStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Algumas informações adicionais sobre o(s) procurador(es)"
      firstButtonContent="Continuar."
      onClickFirstButton={() => nextStep()}
      instructions="“O representante pode fazer-se substituir por outrem se o representado o permitir ou se isso resultar da procuração.” <br /><br /> “O procurador só pode celebrar negócio consigo mesmo (ou seja, com o procurador) se o representado consentir.” <br /><br /> “A data de produção de efeitos é a data a partir da qual o procurador pode agir em nome do representado ao abrigo desta procuração.”"
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
          />
        </section>

        <section className="mb-6">
          <InputAndLabel
            id="dateOfPowerOfAttorney"
            labelContent="A partir de que data a produção deve produzir efeitos?"
            placeholder="Data da procuração"
            type="date"
          />
        </section>
      </div>
    </GenericStep>
  );
}
