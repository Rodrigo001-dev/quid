import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import * as Label from "@radix-ui/react-label";

interface InputAndLabelProps {
  labelContent: string;
  placeholder: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function InputAndLabel({
  id,
  labelContent,
  type,
  placeholder,
  value,
  onChange,
}: InputAndLabelProps) {
  return (
    <div className="flex flex-col flex-wrap md:px-5">
      <Label.Root
        className="mb-1 text-base font-semibold leading-[35px] text-text-500"
        htmlFor={id}
      >
        {labelContent}
      </Label.Root>
      <input
        className="inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-text-500 shadow-[0_0_0_2px] shadow-primary-500 outline-none focus:shadow-[0_0_0_2px_black]"
        type={type ? type : "text"}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
