import React from "react";

const HeadingWithText = ({title,content}) => {
  
  return (
    <div className="my-8">
    <div className="">
      <div className="font-poppins">
        <h4 className="text-2xl text-cogengreen font-bold">
         {title}
      </h4>
        <p className="my-2 leading-relaxed">{content}</p>
      </div>
    </div>
  </div>
  );
};


export default HeadingWithText;
