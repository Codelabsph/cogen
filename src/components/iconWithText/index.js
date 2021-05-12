import React from "react";
import ArrowRight from "public/assets/arrow-right.svg"
const IconWithText = ({ title, paragraph, icon, explore, marginTop }) => {
  const MarginTop = marginTop === "xs" ? "mt-2" : ""
  return (
    <div className="my-14 flex xxs:flex-col">
      <div className="flex justify-center">
       <span>{icon}</span>
      </div>
      <div className="ml-8 xxs:ml-0 font-poppins">
        <h4 className={`text-xl font-bold  ${MarginTop}`}>
         {title}
        </h4>
        <p className="my-2 leading-relaxed">
         {paragraph}
        </p>
        {explore && (<div className="flex items-center space-x-1 font-bold">
          <a href={explore} className="text-cogengreen">
            Explore
          </a>
          <div>
           <ArrowRight/>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};


export default IconWithText;
