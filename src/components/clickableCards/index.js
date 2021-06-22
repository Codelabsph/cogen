import React, { useState } from "react";

const ClickableCards = ({ data }) => {
  const [currentCardIndex, setcurrentCardIndex] = useState(0);

  return (
    <div className="flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins">
      <div className="z-50  w-1/2  md:w-full xxs:w-full sm:w-full xxs:py-4 ">
        <div className="mx-8">
          <img
            className=" w-full xxs:h-auto"
            src={data?.[currentCardIndex]?.img}
          />
        </div>
      </div>
      <div className="z-50  w-1/2  md:w-full xxs:w-full sm:w-full lg:px-8">
        <div className="flex flex-col h-full">
          {data?.map((val, idx) => {
            return (
              <div
                className={`flex items-center cursor-pointer justify-content-center h-2/6 ${
                  idx === currentCardIndex ? "bg-cogengreen" : "bg-green-200"
                }`}
                onMouseEnter={() => setcurrentCardIndex(idx)}
              >
                <div className="p-14">
                  <div className="flex items-center flex-row xxs:flex-col ">
                    <div className=" text-center">
                      <div className="flex items-center justify-center h-24 w-24 rounded-full mb-2 bg-white">
                        <span className="text-6xl font-bold text-green-200">
                          {val?.number}
                        </span>
                      </div>
                      <span
                        className={`tracking-widest  text-base uppercase ${
                          idx === currentCardIndex ? "" : "text-white"
                        }`}
                      >
                        {val?.title}
                      </span>
                    </div>
                    <div className="ml-10 xxs:ml-0">
                      <h5 className="text-xl xxs:text-center xxs:my-5 leading-6 text-white font-bolder mb-5 xxs:font-base">
                        {val?.subtitle}
                      </h5>
                      <p className="mt-2 text-base leading-6 text-white text-justify">
                        {val?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClickableCards;
