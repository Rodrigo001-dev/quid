import { jsPDF } from "jspdf";

import { usePersonData } from "@/store/usePersonData";
import { useAttorneyData } from "@/store/useAttorneyData";

export function generatePDF() {
  const {
    personName,
    personMaritalStatus,
    personFreguesia,
    personConcelho,
    personCountry,
    personNationality,
    personDocument,
    personHabitualResidence,
    taxIdentificationNumber,
    personGender,
    personIdentificationNumber,
    personIssuingCountry,
    powers,
    registrationCalendar,
  } = usePersonData.getState();

  const { attorneys } = useAttorneyData.getState();

  const doc = new jsPDF();
  const marginTop = 30;
  const marginBottom = 20;
  const textHeight = doc.getTextDimensions("Procuração").h;

  doc.text(
    "Procuração",
    doc.internal.pageSize.getWidth() / 2,
    marginTop + textHeight / 2,
    {
      align: "center",
    }
  );

  const lines = doc.splitTextToSize(
    `${personName}, ${personMaritalStatus}, ${
      personFreguesia !== undefined && personConcelho !== undefined
        ? `da freguesia de ${personFreguesia} no concelho de ${personConcelho},`
        : ""
    } ${personCountry}, de nacionalidade ${personNationality}, titular do ${personDocument} número ${personIdentificationNumber}, emitido pelo país: ${personIssuingCountry} e válido até ${registrationCalendar}, contribuinte fiscal número ${taxIdentificationNumber}, residente em ${personHabitualResidence}, (“Mandante”), constitui, pela presente, seu/sua bastante ${attorneys.map(
      (attorney) =>
        `procurador(a) o/a Senhor(a) ${attorney.attorneyName}, ${
          attorney.attorneyMaritalStatus
        }, ${
          attorney.attorneyConcelho !== undefined
            ? `natural de ${attorney.attorneyConcelho}`
            : ""
        }, ${attorney.attorneyCountry}, de nacionalidade ${
          attorney.attorneyNationality
        }, titular do ${attorney.attorneyDocument} número ${
          attorney.attorneyIdentificationNumber
        }, emitido pelo país: ${attorney.attorneyIssuingCountry} e válido até ${
          attorney.attorneyRegistrationCalendar
        }, e contribuinte fiscal número ${
          attorney.attorneyTaxIdentificationNumber
        }, residente em ${attorney.attorneyHabitualResidence}.`
    )} Procurador(a), a quem confere os necessários poderes para, em seu nome e representação ${powers}`,
    190
  );

  doc.text(lines, 10, marginTop + textHeight + marginBottom + 10);
  return doc.output("arraybuffer");
}
