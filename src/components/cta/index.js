import React from "react";
import Buttons from "src/components/buttons";

const Cta = ({ title, buttonTitle, buttonClick }) => {
  return (
    <div className="h-97 w-full flex justify-center flex-col items-center text-center space-y-8">
      <h1 className="text-7xl z-50 font-bold font-playfair tracking-widest  text-white sm:text-base md:text-2xl lg:text-7xl xxs:text-3xl">
        {title}
      </h1>
      <Buttons
        text={buttonTitle}
        paddingY={"xs"}
        btnColor={"white"}
        textColor={"primary"}
        width={"lg"}
        border="xs"
        onClick={buttonClick}
      />
    </div>
  );
};
export default Cta;
