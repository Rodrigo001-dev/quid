import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { PowersIntendsConfer } from "./ThirdStep";
import { PersonalDataStep } from "./FifthStep";
import { PlaceOfBirthAndNationalityStep } from "./SixthStep";
import { CivilIdentificationStep } from "./SeventhStep";
import { CurrentResidenceStep } from "./EighthStep";

export function CheckAllPersonData() {
  const { nextStep } = useWizard();

  return (
    <GenericStep
      title="Verifique se os seus dados estão corretos"
      firstButtonContent="Avançar"
      onClickFirstButton={() => nextStep()}
    >
      <section className="flex flex-col justify-center items-center">
        <PowersIntendsConfer isCheckAllDataStep />
        <PersonalDataStep isCheckAllDataStep />
        <PlaceOfBirthAndNationalityStep isCheckAllDataStep />
        <CurrentResidenceStep isCheckAllDataStep />
        <CivilIdentificationStep isCheckAllDataStep />
      </section>
    </GenericStep>
  );
}
