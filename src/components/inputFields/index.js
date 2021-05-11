import React from "react";

const InputFields = ({ id, text, type, marginBottom, placeholder }) => {
  const marginBottomStyle =
    marginBottom === "xs" ? "mb-6 md:mb-0" : "sm" ? "mb-10 md:mb-2" : "";

  return (
    <div className={`${marginBottomStyle} md:mb-0 w-full`}>
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
        for={id}
      >
        {text}
      </label>
      <input
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputFields;
