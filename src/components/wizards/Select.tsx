import { ChangeEventHandler } from "react";
import { concelhos } from "../../utils/data/concelho";
import { countries } from "../../utils/data/countries";
import { freguesias } from "../../utils/data/freguesia";
import { identificationDocument } from "../../utils/data/identificationDocument";

interface SelectProps {
  id: string;
  labelContent: string;
  data:
    | typeof concelhos
    | typeof countries
    | typeof freguesias
    | typeof identificationDocument;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export function Select({
  id,
  labelContent,
  data,
  value,
  onChange,
}: SelectProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-base font-semibold leading-[35px] text-text-500"
      >
        {labelContent}
      </label>
      <select
        id={id}
        className="bg-[#F3F3F3] border-2 border-primary-500 text-text-500 text-sm rounded-lg focus:ring-primary-200 focus:border-primary-200 w-60 p-2.5"
        value={value}
        onChange={onChange}
      >
        <option defaultChecked>{labelContent}</option>
        {data.map((item) => {
          return (
            <option key={item.code} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
