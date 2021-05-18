import React from "react";

const AbsoluteDiv = ({ height }) => {
  const heightStyle =
    height === "md" ? "py-80" : height === "lg" ? "h-100" : "";

  return (
    <div
      className={`bg-gray-100 w-full absolute  xxs:hidden toBottom ${heightStyle}`}
    ></div>
  );
};

export default AbsoluteDiv;
