import React from "react";

const TextWithHeading = ({title,content}) => {
  
  return (
    <div className="wrapper">
    <h4 className="text-2xl text-black font-bold">
 {title}
    </h4>
    <p className="my-2 leading-relaxed">{content}</p>
  </div>
  );
};


export default TextWithHeading;
