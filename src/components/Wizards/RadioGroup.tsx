import * as RadixRadioGroup from "@radix-ui/react-radio-group";

interface RadioGroupProps {
  radioGroupId: string;
  ariaLabel: string;
  firstRadioValue: string;
  secondRadioValue: string;
  thirdRadioValue: string;
  hasFourthRadio?: boolean;
  fourthRadioValue?: string;
  hasFifthRadio?: boolean;
  fifthRadioValue?: string;
}

export function RadioGroup({
  radioGroupId,
  ariaLabel,
  firstRadioValue,
  secondRadioValue,
  thirdRadioValue,
  hasFourthRadio,
  fourthRadioValue,
  hasFifthRadio,
  fifthRadioValue,
}: RadioGroupProps) {
  return (
    <RadixRadioGroup.Root
      id={radioGroupId}
      className="flex flex-col gap-2"
      aria-label={ariaLabel}
    >
      <div className="flex items-center">
        <RadixRadioGroup.Item
          className="w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value={firstRadioValue}
          id={firstRadioValue}
        >
          <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary-500" />
        </RadixRadioGroup.Item>
        <label
          className="text-text-500 text-[15px] leading-none pl-[15px]"
          htmlFor={firstRadioValue}
        >
          {firstRadioValue}
        </label>
      </div>

      <div className="flex items-center">
        <RadixRadioGroup.Item
          className="w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value={secondRadioValue}
          id={secondRadioValue}
        >
          <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary-500" />
        </RadixRadioGroup.Item>
        <label
          className="text-text-500 text-[15px] leading-none pl-[15px]"
          htmlFor={secondRadioValue}
        >
          {secondRadioValue}
        </label>
      </div>

      <div className="flex items-center">
        <RadixRadioGroup.Item
          className="w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
          value={thirdRadioValue}
          id={thirdRadioValue}
        >
          <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary-500" />
        </RadixRadioGroup.Item>
        <label
          className="text-text-500 text-[15px] leading-none pl-[15px]"
          htmlFor={thirdRadioValue}
        >
          {thirdRadioValue}
        </label>
      </div>

      {hasFourthRadio && (
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
            value={fourthRadioValue}
            id={fourthRadioValue}
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary-500" />
          </RadixRadioGroup.Item>
          <label
            className="text-text-500 text-[15px] leading-none pl-[15px]"
            htmlFor={fourthRadioValue}
          >
            {fourthRadioValue}
          </label>
        </div>
      )}

      {hasFifthRadio && (
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
            value={fifthRadioValue}
            id={fifthRadioValue}
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary-500" />
          </RadixRadioGroup.Item>
          <label
            className="text-text-500 text-[15px] leading-none pl-[15px]"
            htmlFor={fifthRadioValue}
          >
            {fifthRadioValue}
          </label>
        </div>
      )}
    </RadixRadioGroup.Root>
  );
}
