import { Wizard } from "react-use-wizard";

import { FirstStep } from "./Steps/PersonData/FirstStep";
import { SecondStep } from "./Steps/PersonData/SecondStep";
import { ThirdStep } from "./Steps/PersonData/ThirdStep";
import { FourthStep } from "./Steps/PersonData/FourthStep";
import { FifthStep } from "./Steps/PersonData/FifthStep";
import { SixthStep } from "./Steps/PersonData/SixthStep";
import { SeventhStep } from "./Steps/PersonData/SeventhStep";
import { EighthStep } from "./Steps/PersonData/EighthStep";
import { NinthStep } from "./Steps/PersonData/NinthStep";

import { TenthStep } from "./Steps/AttorneyData/TenthStep";
import { EleventhStep } from "./Steps/AttorneyData/EleventhStep";
import { TwelfthStep } from "./Steps/AttorneyData/TwelfthStep";
import { ThirteenthStep } from "./Steps/AttorneyData/ThirteenthStep";
import { FourteenthStep } from "./Steps/AttorneyData/FourteenthStep";
import { FifteenthStep } from "./Steps/AttorneyData/FifteenthStep";
import { SixteenthStep } from "./Steps/AttorneyData/SixteenthStep";

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
      <NinthStep />

      <TenthStep />
      <EleventhStep />
      <TwelfthStep />
      <ThirteenthStep />
      <FourteenthStep />
      <FifteenthStep />
      <SixteenthStep />
    </Wizard>
  );
}
