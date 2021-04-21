import React from "react";

const SimpleCard = ({ image, paragraph, leftAlign }) => {

  const imageAlign = leftAlign ?  'flex-row-reverse' : 'flex-row'
  return (
    <div className={`flex ${imageAlign}`}>
      <div className="w-1/2 lg:w-1/2  sm:w-full xxs:w-full lg:px-8">
        <p className="text-lg font-poppins mb-6">{paragraph && paragraph}</p>
      </div>
      <div className="w-1/2 lg:w-1/2  sm:w-full xxs:w-full lg:px-8">
         {image && image}
      </div>
    </div>
  );
};

export default SimpleCard