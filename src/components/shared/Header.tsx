import Image from "next/image";

import { NavigationButton } from "./NavigationButton";

import Logo from "../../../public/assets/logo.svg";

interface HeaderProps {
  isHomePage: boolean;
}

export function Header({ isHomePage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-32 py-8">
      <div className="hidden md:flex">
        <Image src={Logo} alt="Quid" />
      </div>
      {isHomePage && (
        <nav>
          <NavigationButton
            href="/letterofattorney"
            text="Redigir uma Procuração"
            isHeaderButton
          />
        </nav>
      )}
    </header>
  );
}
