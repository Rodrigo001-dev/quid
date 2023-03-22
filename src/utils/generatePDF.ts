import { jsPDF } from "jspdf";

import { usePersonData } from "@/store/usePersonData";

export function generatePDF() {
  const { personName, personHabitualResidence } = usePersonData.getState();

  const doc = new jsPDF();
  const lines = doc.splitTextToSize(
    `Eu ${personName} declaro que li tudo o que está escrito aqui, minha residencia está localizada no ${personHabitualResidence}`,
    190
  );
  doc.text(lines, 10, 10);
  return doc.output("arraybuffer");
}
