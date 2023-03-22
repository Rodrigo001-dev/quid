import { useWizard } from "react-use-wizard";

import { GenericStep } from "@/components/wizards/GenericStep";
import { Select } from "@/components/wizards/Select";
import { InputAndLabel } from "@/components/wizards/InputAndLabel";
import { Toast } from "@/components/shared/Toast";

import { identificationDocument } from "@/utils/data/identificationDocument";
import { countries } from "@/utils/data/countries";

import { useLetterOfAttorneyContext } from "@/hooks/useLetterOfAttorneyContext";
import { useAttorneyData } from "@/store/useAttorneyData";

interface AttorneyCivilIdentificationStepProps {
  isCheckAllDataStep?: boolean;
}

export function AttorneyCivilIdentificationStep({
  isCheckAllDataStep,
}: AttorneyCivilIdentificationStepProps) {
  const attorneyDocument = useAttorneyData((state) => state.attorneyDocument);
  const attorneyRegistrationCalendar = useAttorneyData(
    (state) => state.attorneyRegistrationCalendar
  );
  const attorneyTaxIdentificationNumber = useAttorneyData(
    (state) => state.attorneyTaxIdentificationNumber
  );
  const attorneyIdentificationNumber = useAttorneyData(
    (state) => state.attorneyIdentificationNumber
  );
  const attorneyIssuingCountry = useAttorneyData(
    (state) => state.attorneyIssuingCountry
  );

  const setAttorneyDocument = useAttorneyData(
    (state) => state.setAttorneyDocument
  );
  const setAttorneyRegistrationCalendar = useAttorneyData(
    (state) => state.setAttorneyRegistrationCalendar
  );
  const setAttorneyTaxIdentificationNumber = useAttorneyData(
    (state) => state.setAttorneyTaxIdentificationNumber
  );
  const setAttorneyIdentificationNumber = useAttorneyData(
    (state) => state.setAttorneyIdentificationNumber
  );
  const setAttorneyIssuingCountry = useAttorneyData(
    (state) => state.setAttorneyIssuingCountry
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (
      attorneyRegistrationCalendar.trim() === "" ||
      !attorneyDocument ||
      attorneyDocument === "Documento de identificação" ||
      attorneyTaxIdentificationNumber.trim() === "" ||
      attorneyIdentificationNumber.trim() === "" ||
      !attorneyIssuingCountry ||
      attorneyIssuingCountry === "País emissor"
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
      title="Por favor, introduza os dados de identificação civil do procurador."
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
    >
      <div className="grid grid-cols-2 gap-8 mb-5">
        <section className="space-y-3">
          <Select
            id="identificationDocumentAttorney"
            labelContent="Documento de identificação"
            data={identificationDocument}
            value={attorneyDocument}
            onChange={(event) => setAttorneyDocument(event.target.value)}
          />
          <input
            className="inline-flex h-[35px] w-60 appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-text-500 shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
            type="text"
            placeholder="Número de identificação"
            value={attorneyIdentificationNumber}
            onChange={(event) =>
              setAttorneyIdentificationNumber(event.target.value)
            }
          />
        </section>

        <section>
          <InputAndLabel
            id="registrationCalendar"
            labelContent="Calendário sobre a inscrição"
            placeholder="Inscrição"
            type="date"
            value={attorneyRegistrationCalendar}
            onChange={(event) =>
              setAttorneyRegistrationCalendar(event.target.value)
            }
          />
        </section>

        <section>
          <Select
            id="country"
            labelContent="País emissor"
            data={countries}
            value={attorneyIssuingCountry}
            onChange={(event) => setAttorneyIssuingCountry(event.target.value)}
          />
        </section>

        <section>
          <InputAndLabel
            id="taxIdentificationNumber"
            labelContent="Número de Identificação Fiscal"
            placeholder="Identificação Fiscal"
            value={attorneyTaxIdentificationNumber}
            onChange={(event) =>
              setAttorneyTaxIdentificationNumber(event.target.value)
            }
          />
        </section>
      </div>
    </GenericStep>
  );
}
