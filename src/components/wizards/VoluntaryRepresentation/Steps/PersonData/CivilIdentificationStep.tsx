import { useEffect } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { InputAndLabel } from "../../../InputAndLabel";
import { Select } from "../../../Select";
import { Toast } from "@/components/shared/Toast";

import { countries } from "@/utils/data/countries";
import { identificationDocument } from "@/utils/data/identificationDocument";
import { usePersonData } from "@/store/usePersonData";

interface CivilIdentificationStepProps {
  isCheckAllDataStep?: boolean;
}

export function CivilIdentificationStep({
  isCheckAllDataStep,
}: CivilIdentificationStepProps) {
  const registrationCalendar = usePersonData(
    (state) => state.registrationCalendar
  );
  const taxIdentificationNumber = usePersonData(
    (state) => state.taxIdentificationNumber
  );
  const personIdentificationNumber = usePersonData(
    (state) => state.personIdentificationNumber
  );
  const personDocument = usePersonData((state) => state.personDocument);
  const personIssuingCountry = usePersonData(
    (state) => state.personIssuingCountry
  );

  const setRegistrationCalendar = usePersonData(
    (state) => state.setRegistrationCalendar
  );
  const setTaxIdentificationNumber = usePersonData(
    (state) => state.setTaxIdentificationNumber
  );
  const setPersonIdentificationNumber = usePersonData(
    (state) => state.setPersonIdentificationNumber
  );
  const setPersonDocument = usePersonData((state) => state.setPersonDocument);
  const setPersonIssuingCountry = usePersonData(
    (state) => state.setPersonIssuingCountry
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (
      registrationCalendar.trim() === "" ||
      taxIdentificationNumber.trim() === "" ||
      !personDocument ||
      personDocument === "Documento de identificação" ||
      personIdentificationNumber.trim() === "" ||
      !personIssuingCountry ||
      personIssuingCountry === "País emissor"
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
      title="Por favor, introduza os seus dados de identificação civil."
      isCheckAllDataStep={isCheckAllDataStep}
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
    >
      <div className="grid grid-rows-1 md:grid-cols-2 gap-8 justify-center md:ml-10 mb-5">
        <section className="space-y-3">
          <Select
            id="identificationDocument"
            labelContent="Documento de identificação"
            data={identificationDocument}
            value={personDocument}
            onChange={(event) => setPersonDocument(event.target.value)}
          />
          <input
            className="inline-flex h-[35px] w-60 appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-text-500 shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
            type="text"
            placeholder="Número de identificação"
            value={personIdentificationNumber}
            onChange={(event) =>
              setPersonIdentificationNumber(event.target.value)
            }
          />
        </section>

        <section>
          <InputAndLabel
            id="registrationCalendar"
            labelContent="Calendário sobre a inscrição"
            placeholder="Inscrição"
            type="date"
            value={registrationCalendar}
            onChange={(event) => setRegistrationCalendar(event.target.value)}
          />
        </section>

        <section>
          <Select
            id="country"
            labelContent="País emissor"
            data={countries}
            value={personIssuingCountry}
            onChange={(event) => setPersonIssuingCountry(event.target.value)}
          />
        </section>

        <section>
          <InputAndLabel
            id="taxIdentificationNumber"
            labelContent="Número de Identificação Fiscal"
            placeholder="Identificação Fiscal"
            value={taxIdentificationNumber}
            onChange={(event) => setTaxIdentificationNumber(event.target.value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
