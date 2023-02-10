import Link from "next/link";

interface ButtonRedirectToLetterOfAttorneyProps {
  text: string;
}

export function ButtonRedirectToLetterOfAttorney({
  text,
}: ButtonRedirectToLetterOfAttorneyProps) {
  return (
    <Link
      className="bg-primary-500 h-14 px-8 py-4 rounded-lg text-center hover:bg-primary-400 transition-colors duration-300"
      href=""
    >
      <span className="text-white text-lg">{text}</span>
    </Link>
  );
}
