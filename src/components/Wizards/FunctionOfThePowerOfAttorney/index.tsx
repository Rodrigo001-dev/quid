import { Wizard } from "react-use-wizard";

import { FirstStep } from "./Steps/FirstStep";
import { SecondStep } from "./Steps/SecondStep";
import { ThirdStep } from "./Steps/ThirdStep";

export function FunctionOfThePowerOfAttorney() {
  return (
    <Wizard>
      <FirstStep />
      <SecondStep />
      <ThirdStep />
    </Wizard>
  );
}
