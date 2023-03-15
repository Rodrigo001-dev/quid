import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { InputAndLabel } from "../../../InputAndLabel";
import { Select } from "../../../Select";
import { Toast } from "@/components/shared/Toast";

import { useLetterOfAttorneyContext } from "@/hooks/useLetterOfAttorneyContext";

import { countries } from "@/utils/countries";
import { concelhos } from "@/utils/concelho";
import { freguesias } from "@/utils/freguesia";

interface PlaceOfBirthAndNationalityStepProps {
  isCheckAllDataStep?: boolean;
}

export function PlaceOfBirthAndNationalityStep({
  isCheckAllDataStep,
}: PlaceOfBirthAndNationalityStepProps) {
  const {
    personNationality,
    setPersonNationality,
    personCountry,
    setPersonCountry,
    personConcelho,
    setPersonConcelho,
    personFreguesia,
    setPersonFreguesia,
  } = useLetterOfAttorneyContext();

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (
      personNationality.trim() === "" ||
      personCountry === "Escolha um país" ||
      !personCountry ||
      !personConcelho ||
      personConcelho === "Escolha um concelho" ||
      !personFreguesia ||
      personFreguesia === "Escolha uma freguesia"
    ) {
      return Toast({
        message: "Todos os campos são obrigatórios",
      });
    }

    nextStep();
  }

  return (
    <GenericStep
      title="Qual a sua naturalidade e nacionalidade?"
      isCheckAllDataStep={isCheckAllDataStep}
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“A naturalidade designa o lugar onde nasceu. A nacionalidade designa o país do qual é cidadão.”"
      legalBase="Art. 46.º, n.º 1, al. c) do CN"
    >
      <div className="grid grid-cols-2 gap-8 mb-5">
        <section className="-ml-[18px]">
          <InputAndLabel
            id="personNationality"
            labelContent="Qual sua nacionalidade"
            placeholder="Nacionalidade"
            value={personNationality}
            onChange={(event) => setPersonNationality(event.target.value)}
          />
        </section>

        <section>
          <Select
            id="country"
            labelContent="Escolha um país"
            data={countries}
            value={personCountry}
            onChange={(event) => setPersonCountry(event.target.value)}
          />
        </section>

        <section>
          <Select
            id="concelho"
            labelContent="Escolha um concelho"
            data={concelhos}
            value={personConcelho}
            onChange={(event) => setPersonConcelho(event.target.value)}
          />
        </section>

        <section>
          <Select
            id="freguesia"
            labelContent="Escolha uma freguesia"
            data={freguesias}
            value={personFreguesia}
            onChange={(event) => setPersonFreguesia(event.target.value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
