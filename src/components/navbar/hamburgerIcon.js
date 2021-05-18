import React from "react";

const HamburgerIcon = ({ onClick, isOpen }) => {
  return (
    <div id="nav-icon2" className={`${isOpen ? "open" : ""}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIcon;
