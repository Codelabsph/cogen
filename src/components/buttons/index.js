import React from "react";

const Buttons = ({
  id,
  text,
  btnColor,
  textColor,
  paddingY,
  width,
  border,
  shadows,
  onClick,
  disabled,
}) => {
  const borderStyle =
    border === "xs"
      ? "border-2 border-cogengreen"
      : border === "sm"
      ? "border-4 border-cogengreen"
      : border === "none"
      ? "border-0"
      : "";
  const btnColorStyle =
    btnColor === "primary"
      ? "bg-cogengreen"
      : btnColor === "white"
      ? "bg-white"
      : btnColor === "transparent"
      ? "bg-transparent"
      : "";
  const paddingYstyle =
    paddingY === "xs" ? "py-3" : paddingY === "sm" ? "py-5" : "";
  const textColorStyle =
    textColor === "primary"
      ? "text-cogengreen"
      : textColor === "white"
      ? "text-white"
      : "";
  const widthStyle = width === "xs" ? "w-44" : width === "lg" ? "w-60" : "";
  const shadowsStyle = shadows ? "xxs:shadow-lg xs:shadow-lg sm:shadow-lg" : "";

  return (
    <button
      type="button"
      id={id}
      className={`${paddingYstyle} ${btnColorStyle} ${textColorStyle} ${widthStyle} ${borderStyle}  ${shadowsStyle} hover:bg-secondary hover:text-primary  text-white w-44 transition ease-in duration-200 text-lg font-bold  rounded-lg`}
      onClick={onClick && onClick}
      disabled={disabled && disabled}
    >
      {text}
    </button>
  );
};

export default Buttons;
