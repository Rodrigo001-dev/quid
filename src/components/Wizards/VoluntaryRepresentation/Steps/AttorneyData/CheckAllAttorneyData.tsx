import { useRouter } from "next/router";

import { GenericStep } from "../../../GenericStep";

import { AttorneyPersonalDataStep } from "./TenthStep";
import { PlaceOfBirthAndNationalityAttorneyStep } from "./EleventhStep";
import { AttorneyCivilIdentificationStep } from "./TwelfthStep";
import { AttorneyCurrentResidenceStep } from "./ThirteenthStep";
import { AdditionalInformationStep } from "./FifteenthStep";
import { useEffect } from "react";

export function CheckAllAttorneyData() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="Verifique se os dados do(s) procurador(es) estão corretos"
      firstButtonContent="Ir para o pagamento"
      onClickFirstButton={() => router.push("/payment")}
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
