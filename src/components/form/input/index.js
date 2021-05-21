import React from "react";

const Input = ({
  id,
  type,
  marginBottom,
  placeholder,
  label,
  onChange,
  value,
  name,
  disabled,
}) => {
  const marginBottomStyle =
    marginBottom === "xs" ? "mb-6 md:mb-0" : "sm" ? "mb-10 md:mb-2" : "";

  return (
    <div className={`${marginBottomStyle} md:mb-0 w-full`}>
      {label && (
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
          for={id}
        >
          {label}
        </label>
      )}
      <input
        className="appearance-none block w-full bg-white text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id={id}
        type={type && type}
        name={name && name}
        placeholder={placeholder}
        onChange={onChange && onChange}
        value={value && value}
        disabled={disabled && disabled}
      />
    </div>
  );
};

export default Input;
