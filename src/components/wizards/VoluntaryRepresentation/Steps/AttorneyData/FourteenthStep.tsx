import { useWizard } from "react-use-wizard";

import { GenericStep } from "@/components/wizards/GenericStep";
import { useAttorneyData } from "@/store/useAttorneyData";

export function AddMoreAttorneyStep() {
  const attorneyName = useAttorneyData((state) => state.attorneyName);
  const attorneyMaritalStatus = useAttorneyData(
    (state) => state.attorneyMaritalStatus
  );
  const attorneyGender = useAttorneyData((state) => state.attorneyGender);
  const attorneyNationality = useAttorneyData(
    (state) => state.attorneyNationality
  );
  const attorneyCountry = useAttorneyData((state) => state.attorneyCountry);
  const attorneyConcelho = useAttorneyData((state) => state.attorneyConcelho);
  const attorneyFreguesia = useAttorneyData((state) => state.attorneyFreguesia);
  const attorneyRegistrationCalendar = useAttorneyData(
    (state) => state.attorneyRegistrationCalendar
  );
  const attorneyTaxIdentificationNumber = useAttorneyData(
    (state) => state.attorneyTaxIdentificationNumber
  );
  const attorneyIdentificationNumber = useAttorneyData(
    (state) => state.attorneyIdentificationNumber
  );
  const attorneyDocument = useAttorneyData((state) => state.attorneyDocument);
  const attorneyIssuingCountry = useAttorneyData(
    (state) => state.attorneyIssuingCountry
  );
  const attorneyHabitualResidence = useAttorneyData(
    (state) => state.attorneyHabitualResidence
  );
  const attorneys = useAttorneyData((state) => state.attorneys);

  const setAttorneyName = useAttorneyData((state) => state.setAttorneyName);
  const setAttorneyMaritalStatus = useAttorneyData(
    (state) => state.setAttorneyMaritalStatus
  );
  const setAttorneyGender = useAttorneyData((state) => state.setAttorneyGender);
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
  const setAttorneyRegistrationCalendar = useAttorneyData(
    (state) => state.setAttorneyRegistrationCalendar
  );
  const setAttorneyTaxIdentificationNumber = useAttorneyData(
    (state) => state.setAttorneyTaxIdentificationNumber
  );
  const setAttorneyIdentificationNumber = useAttorneyData(
    (state) => state.setAttorneyIdentificationNumber
  );
  const setAttorneyDocument = useAttorneyData(
    (state) => state.setAttorneyDocument
  );
  const setAttorneyIssuingCountry = useAttorneyData(
    (state) => state.setAttorneyIssuingCountry
  );
  const setAttorneyHabitualResidence = useAttorneyData(
    (state) => state.setAttorneyHabitualResidence
  );
  const setAttorneys = useAttorneyData((state) => state.setAttorneys);

  const { nextStep, goToStep } = useWizard();

  function addAttorneysOnArray() {
    const attorneyData = {
      attorneyName,
      attorneyMaritalStatus,
      attorneyGender,
      attorneyNationality,
      attorneyCountry,
      attorneyConcelho,
      attorneyFreguesia,
      attorneyRegistrationCalendar,
      attorneyTaxIdentificationNumber,
      attorneyIdentificationNumber,
      attorneyDocument,
      attorneyIssuingCountry,
      attorneyHabitualResidence,
    };

    setAttorneys([...attorneys, attorneyData]);
  }

  function handleGoBackToAddMoreAttorneys() {
    addAttorneysOnArray();

    setAttorneyName("");
    setAttorneyMaritalStatus(undefined);
    setAttorneyGender(undefined);
    setAttorneyNationality("");
    setAttorneyCountry(undefined);
    setAttorneyConcelho(undefined);
    setAttorneyFreguesia(undefined);
    setAttorneyRegistrationCalendar("");
    setAttorneyTaxIdentificationNumber("");
    setAttorneyIdentificationNumber("");
    setAttorneyDocument(undefined);
    setAttorneyIssuingCountry(undefined);
    setAttorneyHabitualResidence("");

    goToStep(9);
  }

  function handleGoToNextStep() {
    addAttorneysOnArray();

    nextStep();
  }

  return (
    <GenericStep
      title="Pretende acrescentar mais procuradores?"
      firstButtonContent="Sim"
      onClickFirstButton={() => handleGoBackToAddMoreAttorneys()}
      secondButtonContent="Não"
      onClickSecondButton={() => handleGoToNextStep()}
    />
  );
}
