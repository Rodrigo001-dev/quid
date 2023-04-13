import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface SubmitSectionProps {
  isSubmitButtonDisable: boolean;
}

export function SubmitSection({ isSubmitButtonDisable }: SubmitSectionProps) {
  return (
    <div>
      <strong className="text-xl">
        Total <span className="font-normal">com IVA:</span> 9.95€
      </strong>

      <div className="flex items-center mt-5">
        <Checkbox.Root
          className="flex h-5 w-5 bg-gray-200 appearance-none items-center justify-center rounded-[4px] shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
          defaultChecked
          disabled
          id="c1"
        >
          <Checkbox.Indicator className="text-primary-500">
            <CheckIcon className="h-6 w-6" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="pl-5 text-sm leading-none text-gray-400" htmlFor="c1">
          Declaro que li a{" "}
          <span className="text-sm text-primary-500">
            Política de Privacidade
          </span>
          , e aceito os{" "}
          <span className="text-sm text-primary-500">Termos e Condições.</span>
        </label>
      </div>

      <button
        className={`flex items-center justify-center w-72 sm-mim:w-80 h-12 py-3 mt-7 font-bold text-lg rounded-lg transition-colors duration-300 text-white bg-primary-500 hover:bg-primary-400 ${
          isSubmitButtonDisable && "bg-gray-400 cursor-not-allowed"
        }`}
        type="submit"
        disabled={isSubmitButtonDisable}
      >
        Finalizar Pagamento
      </button>
    </div>
  );
}
