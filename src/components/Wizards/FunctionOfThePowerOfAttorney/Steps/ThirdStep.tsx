import { useRouter } from "next/router";
import { useWizard } from "react-use-wizard";

import { Modal } from "../Modal";

export function ThirdStep() {
  const { previousStep } = useWizard();
  const router = useRouter();

  return (
    <Modal
      title="Casos especiais"
      description="“Em alguns casos, a procuração está sujeita a forma ou requisitos especiais. A procuração para venda de um terreno, por exemplo, deve ser feita por instrumento público ou documento particular autenticado. O documento que redigir através da Quid não revestirá qualquer forma especial, e a Quid não revê nem interpreta o texto ou informação que submeter. Caso não tenha a certeza sobre se o ato ou negócio a realizar está sujeito a forma especial deve contactar um advogado e as entidades a quem procuração deve ser apresentada.”"
      firstButtonContent="Voltar"
      onClickFirstButton={() => previousStep()}
      secondButtonContent="Compreendi"
      onClickSecondButton={() => router.push("/letterofattorney")}
    />
  );
}
