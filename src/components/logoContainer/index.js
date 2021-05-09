import React from "react";
import LineTop from "public/assets/linetop.svg";
import LineBottom from "public/assets/linebottom.svg";
const LogoContainer = ({ img }) => {
  return (
    <section
      id="section"
      className="max-full mx-auto px-6 py-20"
    >
     <LineTop/>
      <div className="flex justify-center  items-center h-56 ">
        <img className="" src="../assets/img/solarenergy.png"></img>
      </div>
     <LineBottom/>
    </section>
  );
};

export default LogoContainer;
