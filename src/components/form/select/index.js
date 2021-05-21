import React from "react";

const Select = ({
  id,
  placeholder,
  label,
  onChange,
  value,
  name,
  options,
  defaultValue,
  disabled,
}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
        for="grid-state"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id && id}
          name={name && name}
          className=" block   w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
          onChange={onChange && onChange}
          value={value && value}
          placeholder={placeholder}
          defaultValue={defaultValue && defaultValue}
          disabled={disabled && disabled}
        >
          {options &&
            options?.map((val, key) => {
              return (
                <option
                  key={key}
                  value={val?.id}
                  disabled={val?.disabled}
                  selected={val?.selected}
                >
                  {val?.value}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};

export default Select;
