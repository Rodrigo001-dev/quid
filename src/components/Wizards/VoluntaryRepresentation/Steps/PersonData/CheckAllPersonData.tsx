import { useEffect } from "react";
import { useRouter } from "next/router";

import { GenericStep } from "../../../GenericStep";
import { PowersIntendsConfer } from "./ThirdStep";
import { PersonalDataStep } from "./FifthStep";
import { PlaceOfBirthAndNationalityStep } from "./SixthStep";
import { CivilIdentificationStep } from "./SeventhStep";
import { CurrentResidenceStep } from "./EighthStep";

export function CheckAllPersonData() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="Verifique se os seus dados estão corretos"
      firstButtonContent="Ir para o pagamento"
      onClickFirstButton={() => router.push("/payment")}
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
