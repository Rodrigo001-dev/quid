import Image from "next/image";

import { ButtonRedirectToLetterOfAttorney } from "./ButtonRedirectToLetterOfAttorney";

import Logo from "../../../public/assets/logo.svg";

interface HeaderProps {
  isHomePage: boolean;
}

export function Header({ isHomePage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-32 py-8">
      <div>
        <Image src={Logo} alt="Quid" />
      </div>
      {isHomePage && (
        <nav>
          <ButtonRedirectToLetterOfAttorney text="Redigir uma Procuração" />
        </nav>
      )}
    </header>
  );
}
