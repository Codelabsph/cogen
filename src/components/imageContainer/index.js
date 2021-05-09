import React from "react";

const ImageContainer = ({img, title}) => {
  return (
    <>
       <div className="w-1/3 lg:w-1/3 lg:px-8  md:w-full xxs:w-full sm:w-full">
            <div className="z-50 relative">
              <div className="img-cont rounded-md overflow-hidden w-full h-96">
                <img className=" " src={img} />
              </div>
              <h4 className="font-bold py-4">{title}</h4>
            </div>
          </div>
    </>
  );
};

export default ImageContainer;
