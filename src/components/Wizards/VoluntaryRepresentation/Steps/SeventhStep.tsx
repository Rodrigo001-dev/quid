import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../GenericStep";
import { InputAndLabel } from "../../InputAndLabel";
import { Select } from "../../Select";

import { countries } from "../../../../utils/countries";
import { identificationDocument } from "../../../../utils/identificationDocument";

export function SeventhStep() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Por favor, introduza os seus dados de identificação civil."
      firstButtonContent="Continuar."
      isPrimaryButtonFirst
      onClickFirstButton={() => nextStep()}
    >
      <div className="grid grid-cols-2 gap-8 mb-5">
        <section className="space-y-3">
          <Select
            id="identificationDocument"
            labelContent="Documento de identificação"
            data={identificationDocument}
          />
          <input
            className="inline-flex h-[35px] w-60 appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-text-500 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black]"
            type="text"
            placeholder="Número de identificação"
          />
        </section>

        <section>
          <InputAndLabel
            id="registrationCalendar"
            labelContent="Calendário sobre a inscrição"
            placeholder="Inscrição"
            type="date"
          />
        </section>

        <section>
          <Select id="country" labelContent="País emissor" data={countries} />
        </section>

        <section>
          <InputAndLabel
            id="taxIdentificationNumber"
            labelContent="Número de Identificação Fiscal"
            placeholder="Identificação Fiscal"
          />
        </section>
      </div>
    </GenericStep>
  );
}
