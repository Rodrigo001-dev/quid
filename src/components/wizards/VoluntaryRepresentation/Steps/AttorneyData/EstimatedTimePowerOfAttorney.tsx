import { useEffect } from "react";
import { useWizard } from "react-use-wizard";

import { GenericStep } from "@/components/wizards/GenericStep";
import { InputAndLabel } from "@/components/wizards/InputAndLabel";
import { Toast } from "@/components/shared/Toast";

import { useLetterOfAttorney } from "@/store/useLetterOfAttorney";

interface EstimatedTimePowerOfAttorneyProps {
  isCheckAllDataStep?: boolean;
}

export function EstimatedTimePowerOfAttorney({
  isCheckAllDataStep,
}: EstimatedTimePowerOfAttorneyProps) {
  const dateOfPowerOfAttorney = useLetterOfAttorney(
    (state) => state.dateOfPowerOfAttorney
  );
  const dateOfAttorney = useLetterOfAttorney((state) => state.dateOfAttorney);
  const placeOfAttorney = useLetterOfAttorney((state) => state.placeOfAttorney);

  const setDateOfPowerOfAttorney = useLetterOfAttorney(
    (state) => state.setDateOfPowerOfAttorney
  );
  const setDateOfAttorney = useLetterOfAttorney(
    (state) => state.setDateOfAttorney
  );
  const setPlaceOfAttorney = useLetterOfAttorney(
    (state) => state.setPlaceOfAttorney
  );

  const { nextStep } = useWizard();

  function handleGoToNextStep() {
    if (
      dateOfPowerOfAttorney.trim() === "" ||
      dateOfAttorney.trim() === "" ||
      placeOfAttorney.trim() === ""
    ) {
      return Toast({
        message: "Todos os campos são obrigatórios",
      });
    }

    nextStep();
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <GenericStep
      title="Algumas informações adicionais sobre o procurador"
      isCheckAllDataStep={isCheckAllDataStep}
      firstButtonContent="Continuar."
      onClickFirstButton={() => handleGoToNextStep()}
      instructions="“A data de produção de efeitos é a data a partir da qual o procurador pode agir em nome do representado ao abrigo desta procuração.” <br /><br /> “Por favor, indique a data que pretende dar à procuração e o local em que a deverá assinar. Os documentos devem ter a data da sua assinatura.”"
      legalBase="Art. 261.º, n.º 1 do CC"
    >
      <div className="grid grid-rows-3 gap-5 justify-center">
        <section>
          <InputAndLabel
            id="dateOfPowerOfAttorney"
            labelContent="A partir de que data a produção deve produzir efeitos?"
            placeholder="Data de efeito da procuração"
            type="date"
            value={dateOfPowerOfAttorney}
            onChange={(event) => setDateOfPowerOfAttorney(event.target.value)}
          />
        </section>

        <section className="mb-6 grid grid-rows-1 md:grid-cols-2">
          <InputAndLabel
            id="dateOfAttorney"
            labelContent="Qual a data da procuração?"
            placeholder="Selecione a data da procuração"
            type="date"
            value={dateOfAttorney}
            onChange={(event) => setDateOfAttorney(event.target.value)}
          />

          <InputAndLabel
            id="placeOfAttorney"
            labelContent="Qual o local da procuração?"
            placeholder="Digite o local"
            value={placeOfAttorney}
            onChange={(event) => setPlaceOfAttorney(event.target.value)}
          />
        </section>
      </div>
    </GenericStep>
  );
}
