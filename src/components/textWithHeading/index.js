import React from "react";

const TextWithHeading = ({ label, content }) => {
  return (
    <div className="wrapper">
      <h4 className="text-2xl text-black font-bold">{content}</h4>
      <p className="my-2 leading-relaxed">{label}</p>
    </div>
  );
};

export default TextWithHeading;
