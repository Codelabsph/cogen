import React from "react";

const Buttons = ({ id, text, btnColor, textColor, paddingY, width, border,shadows}) => { 
    const Border = border === "xs" ? "border-2 border-cogengreen": border === "sm" ? "border-4 border-cogengreen" : border === "none" ? "border-0" : "";
    const BtnColor = btnColor === "primary" ? "bg-cogengreen" : btnColor === "white" ? "bg-white" : btnColor === "transparent" ? "bg-transparent" : "" ;
    const PaddingY = paddingY === "xs" ? "py-3" : paddingY  === "sm" ? "py-5" : "";
    const TextColor = textColor === "primary" ? "text-cogengreen" : textColor === "white" ? "text-white" : "";
    const Width = width === "xs" ? "w-44" : width === "lg" ? "w-60" : "";
    const Shadows = shadows === "yes" ? "xxs:shadow-lg xs:shadow-lg sm:shadow-lg" : "";

  return (
    <button type="button" id={id} className={`${PaddingY} ${BtnColor} ${TextColor} ${Width} ${Border}  ${Shadows} hover:bg-secondary hover:text-primary  text-white w-44 transition ease-in duration-200 text-lg font-bold  rounded-lg`}>
    {text}</button>
  );
};

export default Buttons;
