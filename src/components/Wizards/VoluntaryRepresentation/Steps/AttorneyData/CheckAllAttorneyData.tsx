import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";

import { AttorneyPersonalDataStep } from "./TenthStep";
import { PlaceOfBirthAndNationalityAttorneyStep } from "./EleventhStep";
import { AttorneyCivilIdentificationStep } from "./TwelfthStep";
import { AttorneyCurrentResidenceStep } from "./ThirteenthStep";
import { AdditionalInformationStep } from "./FifteenthStep";

export function CheckAllAttorneyData() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Verifique se os dados do(s) procurador(es) estão corretos"
      firstButtonContent="Ir para o pagamento"
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
