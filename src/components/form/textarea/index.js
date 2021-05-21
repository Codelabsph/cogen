import React from "react";

const Textarea = ({
  id,
  placeholder,
  label,
  onChange,
  value,
  name,
  rows = 6,
  disabled,
}) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
        for={id}
      >
        {label}
      </label>
      <textarea
        id={id && id}
        name={name && name}
        rows={rows && rows}
        onChange={onChange && onChange}
        value={value && value}
        placeholder={placeholder && placeholder}
        className=" p-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        disabled={disabled && disabled}
      />
    </>
  );
};

export default Textarea;
