import React from "react";

const AbsoluteDiv = ({height}) => {

  const Height = height === 'md' ? 'py-80' : height === 'lg' ? "h-100" : "";
  return (
    <div className={`bg-gray-100 w-full absolute ${Height} xxs:hidden toBottom`}></div>
  );
};

export default AbsoluteDiv;