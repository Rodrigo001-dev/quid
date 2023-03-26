import { useEffect } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";

import { AttorneyPersonalDataStep } from "./TenthStep";
import { PlaceOfBirthAndNationalityAttorneyStep } from "./EleventhStep";
import { AttorneyCivilIdentificationStep } from "./TwelfthStep";
import { AttorneyCurrentResidenceStep } from "./ThirteenthStep";

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
      </section>
    </GenericStep>
  );
}
