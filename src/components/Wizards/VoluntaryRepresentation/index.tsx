import { Wizard } from "react-use-wizard";

import { FirstStep } from "./Steps/FirstStep";
import { SecondStep } from "./Steps/SecondStep";
import { ThirdStep } from "./Steps/ThirdStep";
import { FourthStep } from "./Steps/FourthStep";
import { FifthStep } from "./Steps/FifthStep";
import { SixthStep } from "./Steps/SixthStep";
import { SeventhStep } from "./Steps/SeventhStep";
import { EighthStep } from "./Steps/EighthStep";

export function VoluntaryRepresentation() {
  return (
    <Wizard>
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <FourthStep />
      <FifthStep />
      <SixthStep />
      <SeventhStep />
      <EighthStep />
    </Wizard>
  );
}
