import { Wizard } from "react-use-wizard";

// Customer
import { ApplyForPowerOfAttorneyStep } from "./Steps/PersonData/ApplyForPowerOfAttorneyStep";
import { AdministratorOrManagerStep } from "./Steps/PersonData/AdministratorOrManagerStep";
import { PowersIntendsConfer } from "./Steps/PersonData/PowersIntendsConfer";
import { SpecialCaseStep } from "./Steps/PersonData/SpecialCaseStep";
import { PersonalDataStep } from "./Steps/PersonData/PersonalDataStep";
import { PlaceOfBirthAndNationalityStep } from "./Steps/PersonData/PlaceOfBirthAndNationalityStep";
import { CivilIdentificationStep } from "./Steps/PersonData/CivilIdentificationStep";
import { CurrentResidenceStep } from "./Steps/PersonData/CurrentResidenceStep";
import { BreakpointStep } from "./Steps/PersonData/BreakpointStep";
import { CheckAllPersonData } from "./Steps/PersonData/CheckAllPersonData";

// Attorney
import { AttorneyPersonalDataStep } from "./Steps/AttorneyData/AttorneyPersonalDataStep";
import { PlaceOfBirthAndNationalityAttorneyStep } from "./Steps/AttorneyData/PlaceOfBirthAndNationalityAttorneyStep";
import { AttorneyCivilIdentificationStep } from "./Steps/AttorneyData/AttorneyCivilIdentificationStep";
import { AttorneyCurrentResidenceStep } from "./Steps/AttorneyData/AttorneyCurrentResidenceStep";
import { AdditionalInformationStep } from "./Steps/AttorneyData/AdditionalInformationStep";
import { CheckAllAttorneyData } from "./Steps/AttorneyData/CheckAllAttorneyData";
import { AddMoreAttorneyStep } from "./Steps/AttorneyData/AddMoreAttorneyStep";
import { DeadlinePowerOfAttorneyStep } from "./Steps/AttorneyData/DeadlinePowerOfAttorneyStep";
import { EstimatedTimePowerOfAttorney } from "./Steps/AttorneyData/EstimatedTimePowerOfAttorney";

import { BreakpointAttorneyStep } from "./Steps/AttorneyData/BreakpointAttorneyStep";

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
      <CheckAllPersonData />
      <BreakpointStep />

      <AttorneyPersonalDataStep />
      <PlaceOfBirthAndNationalityAttorneyStep />
      <AttorneyCivilIdentificationStep />
      <AttorneyCurrentResidenceStep />
      <AdditionalInformationStep />
      <CheckAllAttorneyData />
      <AddMoreAttorneyStep />
      <DeadlinePowerOfAttorneyStep />
      <EstimatedTimePowerOfAttorney />

      <BreakpointAttorneyStep />
    </Wizard>
  );
}
