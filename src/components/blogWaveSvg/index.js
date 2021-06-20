import React from "react";
import Wave1 from "public/assets/blog-wave.svg";
import Wave2 from "public/assets/blog-wave1.svg";

const WaveSvg = () => {
  return (
    <div className="relative xxs:hidden xs:hidden">
      <div className="absolute z-50 left-0">
        <Wave1 />
      </div>
      <div className="absolute z-0 left-0">
        <Wave2 />
      </div>
    </div>
  );
};

export default WaveSvg;
