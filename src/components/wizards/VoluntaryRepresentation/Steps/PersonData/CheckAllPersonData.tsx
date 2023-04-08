import { useEffect } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { PowersIntendsConfer } from "./PowersIntendsConfer";
import { PersonalDataStep } from "./PersonalDataStep";
import { PlaceOfBirthAndNationalityStep } from "./PlaceOfBirthAndNationalityStep";
import { CivilIdentificationStep } from "./CivilIdentificationStep";
import { CurrentResidenceStep } from "./CurrentResidenceStep";

export function CheckAllPersonData() {
  const { nextStep } = useWizard();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="Verifique se os seus dados estão corretos"
      firstButtonContent="Continuar."
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
