import { useWizard } from "react-use-wizard";

import { useLetterOfAttorneyContext } from "@/hooks/useLetterOfAttorneyContext";

import { GenericStep } from "@/components/Wizards/GenericStep";

export function AddMoreAttorneyStep() {
  const {
    attorneyName,
    setAttorneyName,
    attorneyMaritalStatus,
    setAttorneyMaritalStatus,
    attorneyGender,
    setAttorneyGender,
    attorneyNationality,
    setAttorneyNationality,
    attorneyCountry,
    setAttorneyCountry,
    attorneyConcelho,
    setAttorneyConcelho,
    attorneyFreguesia,
    setAttorneyFreguesia,
    attorneyRegistrationCalendar,
    setAttorneyRegistrationCalendar,
    attorneyTaxIdentificationNumber,
    setAttorneyTaxIdentificationNumber,
    attorneyIdentificationNumber,
    setAttorneyIdentificationNumber,
    attorneyDocument,
    setAttorneyDocument,
    attorneyIssuingCountry,
    setAttorneyIssuingCountry,
    attorneyHabitualResidence,
    setAttorneyHabitualResidence,
    attorneys,
    setAttorneys,
  } = useLetterOfAttorneyContext();
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
