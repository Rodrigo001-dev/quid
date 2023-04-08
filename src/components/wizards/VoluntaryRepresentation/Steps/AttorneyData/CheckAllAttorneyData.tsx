import { useEffect } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";

import { AttorneyPersonalDataStep } from "./AttorneyPersonalDataStep";
import { PlaceOfBirthAndNationalityAttorneyStep } from "./PlaceOfBirthAndNationalityAttorneyStep";
import { AttorneyCivilIdentificationStep } from "./AttorneyCivilIdentificationStep";
import { AttorneyCurrentResidenceStep } from "./AttorneyCurrentResidenceStep";
import { AdditionalInformationStep } from "./AdditionalInformationStep";

export function CheckAllAttorneyData() {
  const { nextStep } = useWizard();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="Verifique se os dados do procurador estão corretos"
      firstButtonContent="Avançar"
      onClickFirstButton={() => nextStep()}
    >
      <section className="flex flex-col justify-center items-center">
        <AttorneyPersonalDataStep isCheckAllDataStep />
        <PlaceOfBirthAndNationalityAttorneyStep isCheckAllDataStep />
        <AttorneyCivilIdentificationStep isCheckAllDataStep />
        <AttorneyCurrentResidenceStep isCheckAllDataStep />
        <AdditionalInformationStep isCheckAllDataStep />
      </section>
    </GenericStep>
  );
}
