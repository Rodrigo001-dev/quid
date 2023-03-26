import Link from "next/link";

interface NavigationButtonProps {
  text: string;
  href: string;
  isHeaderButton?: boolean;
}

export function NavigationButton({
  text,
  href,
  isHeaderButton,
}: NavigationButtonProps) {
  return (
    <Link
      className={`bg-primary-500 px-8 py-4 rounded-lg text-center hover:bg-primary-400 transition-colors duration-300 ${
        isHeaderButton && "hidden md:flex"
      }`}
      aria-label="Ir para a página de Procuração"
      href={href}
    >
      <span className="text-white text-lg">{text}</span>
    </Link>
  );
}
