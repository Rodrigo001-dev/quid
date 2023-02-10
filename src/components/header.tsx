import Image from "next/image";

import { ButtonRedirectToLetterOfAttorney } from "./ButtonRedirectToLetterOfAttorney";

import Logo from "../../public/assets/logo.svg";

export function Header() {
  return (
    <header className="flex items-center justify-between px-32 py-8">
      <div>
        <Image src={Logo} alt="Quid" />
      </div>
      <nav>
        <ButtonRedirectToLetterOfAttorney text="Redigir uma Procuração" />
      </nav>
    </header>
  );
}
