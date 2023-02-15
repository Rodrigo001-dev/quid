import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../GenericStep";
import { InputAndLabel } from "../../InputAndLabel";
import { Select } from "../../Select";

import { countries } from "../../../../utils/countries";
import { conselhos } from "../../../../utils/concelho";
import { freguesias } from "../../../../utils/freguesia";

export function SixthStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Qual a sua naturalidade e nacionalidade?"
      firstButtonContent="Continuar."
      isPrimaryButtonFirst
      onClickFirstButton={() => nextStep()}
      instructions="“A naturalidade designa o lugar onde nasceu. A nacionalidade designa o país do qual é cidadão.”"
      legalBase="Art. 46.º, n.º 1, al. c) do CN"
    >
      <div className="grid grid-cols-2 gap-8 mb-5">
        <section className="-ml-[18px]">
          <InputAndLabel
            id="personNationality"
            labelContent="Qual sua nacionalidade"
            placeholder="Nacionalidade"
          />
        </section>

        <section>
          <Select
            id="country"
            labelContent="Escolha um país"
            data={countries}
          />
        </section>

        <section>
          <Select
            id="concelho"
            labelContent="Escolha um concelho"
            data={conselhos}
          />
        </section>

        <section>
          <Select
            id="freguesia"
            labelContent="Escolha uma freguesia"
            data={freguesias}
          />
        </section>
      </div>
    </GenericStep>
  );
}
