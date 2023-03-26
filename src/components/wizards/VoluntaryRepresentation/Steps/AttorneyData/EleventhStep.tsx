import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { InputAndLabel } from "../../../InputAndLabel";
import { Select } from "../../../Select";
import { Toast } from "@/components/shared/Toast";

import { countries } from "@/utils/data/countries";
import { concelhos } from "@/utils/data/concelho";
import { freguesias } from "@/utils/data/freguesia";

import { useAttorneyData } from "@/store/useAttorneyData";

interface PlaceOfBirthAndNationalityAttorneyStepProps {
  isCheckAllDataStep?: boolean;
}

export function PlaceOfBirthAndNationalityAttorneyStep({
  isCheckAllDataStep,
}: PlaceOfBirthAndNationalityAttorneyStepProps) {
  const attorneyNationality = useAttorneyData(
    (state) => state.attorneyNationality
  );
  const attorneyCountry = useAttorneyData((state) => state.attorneyCountry);
  const attorneyConcelho = useAttorneyData((state) => state.attorneyConcelho);
  const attorneyFreguesia = useAttorneyData((state) => state.attorneyFreguesia);

  const setAttorneyNationality = useAttorneyData(
    (state) => state.setAttorneyNationality
  );
  const setAttorneyCountry = useAttorneyData(
    (state) => state.setAttorneyCountry
  );
  const setAttorneyConcelho = useAttorneyData(
    (state) => state.setAttorneyConcelho
  );
  const setAttorneyFreguesia = useAttorneyData(
    (state) => state.setAttorneyFreguesia
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (
      attorneyNationality.trim() === "" ||
      !attorneyCountry ||
      attorneyCountry === "Escolha um país" ||
      !attorneyConcelho ||
      attorneyConcelho === "Escolha um concelho" ||
      !attorneyFreguesia ||
      attorneyFreguesia === "Escolha uma freguesia"
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
      title="Qual a naturalidade e nacionalidade do procurador?"
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“A naturalidade designa o lugar onde nasceu. A nacionalidade designa o país do qual é cidadão.”"
      legalBase="Art. 46.º, n.º 1, al. c) do CN"
    >
      <div className="grid grid-rows-1 md:grid-cols-2 justify-center gap-8 mb-5">
        <section className="md:-ml-[18px]">
          <InputAndLabel
            id="attorneyNationality"
            labelContent="Qual a nacionalidade do procurador"
            placeholder="Nacionalidade"
            value={attorneyNationality}
            onChange={(event) => setAttorneyNationality(event.target.value)}
          />
        </section>

        <section>
          <Select
            id="country"
            labelContent="Escolha um país"
            data={countries}
            value={attorneyCountry}
            onChange={(event) => setAttorneyCountry(event.target.value)}
          />
        </section>

        <section>
          <Select
            id="concelho"
            labelContent="Escolha um concelho"
            data={concelhos}
            value={attorneyConcelho}
            onChange={(event) => setAttorneyConcelho(event.target.value)}
          />
        </section>

        <section>
          <Select
            id="freguesia"
            labelContent="Escolha uma freguesia"
            data={freguesias}
            value={attorneyFreguesia}
            onChange={(event) => setAttorneyFreguesia(event.target.value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
