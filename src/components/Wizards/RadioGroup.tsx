import * as RadixRadioGroup from "@radix-ui/react-radio-group";

interface RadioGroupProps {
  radioGroupId: string;
  ariaLabel: string;
  firstRadioValue: string;
  secondRadioValue: string;
  thirdRadioValue?: string;
  fourthRadioValue?: string;
  fifthRadioValue?: string;
  value: string | undefined;
  onValueChange: ((value: string) => void) | undefined;
}

export function RadioGroup({
  radioGroupId,
  ariaLabel,
  firstRadioValue,
  secondRadioValue,
  thirdRadioValue,
  fourthRadioValue,
  fifthRadioValue,
  value,
  onValueChange,
}: RadioGroupProps) {
  return (
    <RadixRadioGroup.Root
      id={radioGroupId}
      className="flex flex-col gap-2"
      aria-label={ariaLabel}
      value={value}
      onValueChange={onValueChange}
    >
      <div className="flex items-center">
        <RadixRadioGroup.Item
          className="w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
          value={firstRadioValue}
          id={firstRadioValue}
        >
          <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-[50%] after:bg-primary-500" />
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
          className="w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
          value={secondRadioValue}
          id={secondRadioValue}
        >
          <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-[50%] after:bg-primary-500" />
        </RadixRadioGroup.Item>
        <label
          className="text-text-500 text-[15px] leading-none pl-[15px]"
          htmlFor={secondRadioValue}
        >
          {secondRadioValue}
        </label>
      </div>

      {thirdRadioValue && (
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
            value={thirdRadioValue}
            id={thirdRadioValue}
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-[50%] after:bg-primary-500" />
          </RadixRadioGroup.Item>
          <label
            className="text-text-500 text-[15px] leading-none pl-[15px]"
            htmlFor={thirdRadioValue}
          >
            {thirdRadioValue}
          </label>
        </div>
      )}

      {fourthRadioValue && (
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
            value={fourthRadioValue}
            id={fourthRadioValue}
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-[50%] after:bg-primary-500" />
          </RadixRadioGroup.Item>
          <label
            className="text-text-500 text-[15px] leading-none pl-[15px]"
            htmlFor={fourthRadioValue}
          >
            {fourthRadioValue}
          </label>
        </div>
      )}

      {fifthRadioValue && (
        <div className="flex items-center">
          <RadixRadioGroup.Item
            className="w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black outline-1 outline-primary-500 cursor-default"
            value={fifthRadioValue}
            id={fifthRadioValue}
          >
            <RadixRadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-[50%] after:bg-primary-500" />
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
