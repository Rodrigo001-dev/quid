import { Header } from "@/components/shared/Header";
import { VoluntaryRepresentation } from "../components/wizards/VoluntaryRepresentation";

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
