import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { InputAndLabel } from "../../../InputAndLabel";
import { Select } from "../../../Select";
import { Toast } from "@/components/shared/Toast";

import { countries } from "@/utils/countries";
import { concelhos } from "@/utils/concelho";
import { freguesias } from "@/utils/freguesia";

import { useLetterOfAttorneyContext } from "@/hooks/useLetterOfAttorneyContext";

interface PlaceOfBirthAndNationalityAttorneyStepProps {
  isCheckAllDataStep?: boolean;
}

export function PlaceOfBirthAndNationalityAttorneyStep({
  isCheckAllDataStep,
}: PlaceOfBirthAndNationalityAttorneyStepProps) {
  const {
    attorneyNationality,
    setAttorneyNationality,
    attorneyCountry,
    setAttorneyCountry,
    attorneyConcelho,
    setAttorneyConcelho,
    attorneyFreguesia,
    setAttorneyFreguesia,
  } = useLetterOfAttorneyContext();

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
      <div className="grid grid-cols-2 gap-8 mb-5">
        <section className="-ml-[18px]">
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
