import { Header } from "@/components/header";
import { VoluntaryRepresentation } from "../components/Wizards/VoluntaryRepresentation";

export default function LetterOfAttorney() {
  return (
    <>
      <Header isHomePage={false} />
      <main className="flex items-center justify-center">
        <VoluntaryRepresentation />
      </main>
    </>
  );
}
