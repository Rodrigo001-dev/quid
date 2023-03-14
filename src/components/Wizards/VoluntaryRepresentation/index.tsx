import { Wizard } from "react-use-wizard";

// Customer
import { ApplyForPowerOfAttorneyStep } from "./Steps/PersonData/FirstStep";
import { AdministratorOrManagerStep } from "./Steps/PersonData/SecondStep";
import { PowersIntendsConfer } from "./Steps/PersonData/ThirdStep";
import { SpecialCaseStep } from "./Steps/PersonData/FourthStep";
import { PersonalDataStep } from "./Steps/PersonData/FifthStep";
import { PlaceOfBirthAndNationalityStep } from "./Steps/PersonData/SixthStep";
import { CivilIdentificationStep } from "./Steps/PersonData/SeventhStep";
import { CurrentResidenceStep } from "./Steps/PersonData/EighthStep";
import { BreakpointStep } from "./Steps/PersonData/NinthStep";
import { CheckAllPersonData } from "./Steps/PersonData/CheckAllPersonData";

// Attorney
import { AttorneyPersonalDataStep } from "./Steps/AttorneyData/TenthStep";
import { PlaceOfBirthAndNationalityAttorneyStep } from "./Steps/AttorneyData/EleventhStep";
import { AttorneyCivilIdentificationStep } from "./Steps/AttorneyData/TwelfthStep";
import { AttorneyCurrentResidenceStep } from "./Steps/AttorneyData/ThirteenthStep";
import { AddMoreAttorneyStep } from "./Steps/AttorneyData/FourteenthStep";
import { AdditionalInformationStep } from "./Steps/AttorneyData/FifteenthStep";
import { DeadlinePowerOfAttorneyStep } from "./Steps/AttorneyData/SixteenthStep";
import { CheckAllAttorneyData } from "./Steps/AttorneyData/CheckAllAttorneyData";

export function VoluntaryRepresentation() {
  return (
    <Wizard>
      <ApplyForPowerOfAttorneyStep />
      <AdministratorOrManagerStep />
      <PowersIntendsConfer />
      <SpecialCaseStep />
      <PersonalDataStep />
      <PlaceOfBirthAndNationalityStep />
      <CivilIdentificationStep />
      <CurrentResidenceStep />
      <BreakpointStep />

      <AttorneyPersonalDataStep />
      <PlaceOfBirthAndNationalityAttorneyStep />
      <AttorneyCivilIdentificationStep />
      <AttorneyCurrentResidenceStep />
      <CheckAllAttorneyData />
      <AddMoreAttorneyStep />
      <AdditionalInformationStep />
      <DeadlinePowerOfAttorneyStep />

      <CheckAllPersonData />
    </Wizard>
  );
}
