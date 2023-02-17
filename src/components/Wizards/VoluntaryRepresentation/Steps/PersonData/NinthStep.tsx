import { useWizard } from "react-use-wizard";

import { Button } from "../../../Button";

export function NinthStep() {
  const { nextStep } = useWizard();

  return (
    <div className="bg-[#F3F3F3] rounded-lg p-10 flex items-center shadow justify-between">
      <div>
        <svg
          className="mb-4 h-20 w-20 text-green-500 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {" "}
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>

        <strong className="text-2xl mb-4 text-gray-800 text-center font-bold">
          Seus dados foram salvos corretamente
        </strong>

        <div className="text-gray-600 mb-8">
          Agora vamos seguir para os dados do procurador
        </div>

        <Button onClick={() => nextStep()} content="Continuar." />
      </div>
    </div>
  );
}
