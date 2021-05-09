import React from "react";

const SimpleCard = ({ image, paragraph, leftAlign }) => {

  const imageAlign = leftAlign?  'flex-row-reverse' : 'flex-row';
  return (
    <div className={`flex ${imageAlign} xxs:flex-col-reverse  justify-center `}>
      <div className="w-1/2 lg:w-1/2  sm:w-full xxs:w-full">
        <p className="text-lg font-poppins mb-6">{paragraph && paragraph}</p>
      </div>
      <div className=" ml-24 w-1/2 lg:w-1/2   xxs:py-4 sm:w-full xxs:w-full xxs:ml-0">
         {image && image}
      </div>
    </div>
  );
};

export default SimpleCard;