import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";

import { LetterOfAttorneyContextProvider } from "@/context/LetterOfAttorneyContext";

import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <LetterOfAttorneyContextProvider>
        <Component {...pageProps} />
      </LetterOfAttorneyContextProvider>
    </div>
  );
}
