import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { Inter } from "@next/font/google";

import { LetterOfAttorneyContextProvider } from "@/context/LetterOfAttorneyContext";

import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <LetterOfAttorneyContextProvider>
        <ToastContainer
          autoClose={3000}
          toastStyle={{ backgroundColor: "#e74c3c" }}
        />
        <Component {...pageProps} />
      </LetterOfAttorneyContextProvider>
    </div>
  );
}
