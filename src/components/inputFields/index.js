import React from "react";

const InputFields = ({ id, btnColor, textColor, paddingY, width, border,type, marginBottom, placeholder, label}) => { 
        const Border = border === "xs" ? "border-2 border-cogengreen": border === "sm" ? "border-4 border-cogengreen" : border === "none" ? "border-0" : "";
        const BtnColor = btnColor === "primary" ? "bg-cogengreen" : btnColor === "white" ? "bg-white" : btnColor === "transparent" ? "bg-transparent" : "" ;
        const PaddingY = paddingY === "xs" ? "py-3" : paddingY  === "sm" ? "py-5" : "";
        const TextColor = textColor === "primary" ? "text-cogengreen" : textColor === "white" ? "text-white" : "";
        const Width = width === "full" ? "w-full" : width === "w-44" ? "w-44" : "";
    const MarginBottom = marginBottom === "xs" ? "mb-6 md:mb-0" : "sm" ? "mb-10 md:mb-2" : "";
    

  return (
    <div className={`${MarginBottom} md:mb-0 w-full`}>
   {label && <label className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2" for={id} >{label}</label> }
    <input
      className="appearance-none block w-full bg-gray-100 text-grey-darker border border-red rounded py-3 px-4 mb-3"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </div>
  );
};

export default InputFields;
