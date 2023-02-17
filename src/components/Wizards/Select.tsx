import { conselhos } from "../../utils/concelho";
import { countries } from "../../utils/countries";
import { freguesias } from "../../utils/freguesia";
import { identificationDocument } from "../../utils/identificationDocument";

interface SelectProps {
  id: string;
  labelContent: string;
  data:
    | typeof conselhos
    | typeof countries
    | typeof freguesias
    | typeof identificationDocument;
}

export function Select({ id, labelContent, data }: SelectProps) {
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
