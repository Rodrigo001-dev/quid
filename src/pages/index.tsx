import Head from "next/head";

import { Header } from "@/components/shared/Header";
import { NavigationButton } from "@/components/shared/NavigationButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quid</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isHomePage />
      <div className="min-h-screen flex flex-col justify-between overflow-hidden bg-[url('/assets/bg-img.svg')] bg-cover md:bg-contain bg-no-repeat md:bg-right-bottom">
        <main className="max-w-[1440px] mt-24 ml-16 md:mt-72 md:ml-32 text-text-500">
          <h1 className="text-4xl md:text-5xl text-bold font-bold pb-11">
            Somos facilitadores de <br /> processos jurídicos.
          </h1>

          <p className="text-base md:text-lg pb-11">
            Lorem ipsum is placeholder text commonly used in the graphic,
            <br /> print, and publishing industries for previewing layouts and
            visual mockups.
          </p>

          <div className="max-w-[547px] flex flex-col md:flex-row gap-7 md:gap-0 items-start md:items-center justify-start">
            <NavigationButton href="/letterofattorney" text="Experimente já!" />
            <span className="text-lg mt-2 md:mt-0 md:ml-10">
              Tem dúvidas? Nós ajudamos.
            </span>
          </div>
        </main>

        <footer className="ml-16 md:ml-32 my-9">
          Copyright © 2023 Quid. All right reserved. Políticas de Privacidade
        </footer>
      </div>
    </>
  );
}
