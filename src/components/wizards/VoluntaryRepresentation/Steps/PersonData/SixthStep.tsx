import { useWizard } from "react-use-wizard";

import { GenericStep } from "../../../GenericStep";
import { InputAndLabel } from "../../../InputAndLabel";
import { Select } from "../../../Select";
import { Toast } from "@/components/shared/Toast";

import { countries } from "@/utils/data/countries";
import { concelhos } from "@/utils/data/concelho";
import { freguesias } from "@/utils/data/freguesia";
import { usePersonData } from "@/store/usePersonData";

interface PlaceOfBirthAndNationalityStepProps {
  isCheckAllDataStep?: boolean;
}

export function PlaceOfBirthAndNationalityStep({
  isCheckAllDataStep,
}: PlaceOfBirthAndNationalityStepProps) {
  const personNationality = usePersonData((state) => state.personNationality);
  const personCountry = usePersonData((state) => state.personCountry);
  const personConcelho = usePersonData((state) => state.personConcelho);
  const personFreguesia = usePersonData((state) => state.personFreguesia);

  const setPersonNationality = usePersonData(
    (state) => state.setPersonNationality
  );
  const setPersonCountry = usePersonData((state) => state.setPersonCountry);
  const setPersonConcelho = usePersonData((state) => state.setPersonConcelho);
  const setPersonFreguesia = usePersonData((state) => state.setPersonFreguesia);

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
      <div className="grid grid-rows-1 md:grid-cols-2 justify-center gap-8 mb-5">
        <section className="md:-ml-[18px]">
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
