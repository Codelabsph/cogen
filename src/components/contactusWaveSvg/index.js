import React from "react";
import Wave1 from "public/assets/contactus-wave.svg";
import Wave2 from "public/assets/contactus-wave2.svg";

const WaveSvg = ({ wave1, wave2 }) => {
  return (
    <div className="relative xxs:hidden xs:hidden">
      <div className="absolute z-50 right-0">
        <Wave1 />
      </div>
      <div className="absolute  z-0 right-0">
        <Wave2 />
      </div>
    </div>
  );
};

export default WaveSvg;
