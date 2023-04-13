import { NavigationButton } from "@/components/shared/NavigationButton";

export default function Thanks() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-hidden bg-[url('/assets/final-page-bg.svg')] bg-contain bg-no-repeat bg-right">
      <div className="max-w-[1440px] mt-44 sm-mim:mt-72 ml-10 sm-mim:ml-32 text-text-500">
        <h1 className="text-5xl text-bold font-bold pb-11">Obrigado!</h1>

        <p className="text-lg pb-11">
          A sua procuração será enviada para o email indicado anteriormente{" "}
          <br />
          depois que o pagamento for confirmado
        </p>

        <div className="max-w-[547px] flex items-center justify-start">
          <NavigationButton href="/" text="Ir para a Página Inicial" />
        </div>
      </div>
    </main>
  );
}
