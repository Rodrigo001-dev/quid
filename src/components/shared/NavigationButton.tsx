import Link from "next/link";

interface NavigationButtonProps {
  text: string;
  href: string;
}

export function NavigationButton({ text, href }: NavigationButtonProps) {
  return (
    <Link
      className="bg-primary-500 h-14 px-8 py-4 rounded-lg text-center hover:bg-primary-400 transition-colors duration-300"
      aria-label="Ir para a página de Procuração"
      href={href}
    >
      <span className="text-white text-lg">{text}</span>
    </Link>
  );
}
