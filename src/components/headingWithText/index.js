import React from "react";

const HeadingWithText = ({ content, label }) => {
  return (
    <div className="my-8">
      <div className="font-poppins">
        <h4 className="text-2xl text-cogengreen font-bold">{content}</h4>
        <p className="my-2 leading-relaxed">{label}</p>
      </div>
    </div>
  );
};

export default HeadingWithText;
