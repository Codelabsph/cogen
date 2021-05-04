import React from "react";
import Buttons from "src/components/buttons";
import ArrowIcon from "public/assets/arrow-icon.svg"
const ColumnCards = () => {
  return (
    <>
        <div className=" flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins xxs:text-center">
          <div className="w-1/2 lg:w-1/2 lg:px-8  md:w-full xxs:w-full sm:w-full">
            <div className="z-50 relative ">
            <img className="w-full xxs:h-auto" src="../assets/img/featureImg.jpeg" />
            </div>
          </div>

          <div className=" z-50 relative  w-1/2 lg:w-1/2 md:w-full xxs:w-full sm:w-full lg:px-8">
            <p className="text-lg py-4">
              Solar savings are calculated using roof size and shape, shaded
              roof areas, local weather, local electricity prices, solar costs,
              and estimated incentives over time. Using a sample address, take a
              look at the detailed estimate Project Sunroof can give you.
            </p>
            <h2 className="text-lg font-bold my-2 ">
              Mandaluyong Project{" "}
              <span className="font-normal ml-5 xxs:ml-0">
                Installed on June 24, 2020
              </span>
            </h2>
            <div className="flex flex-row my-4 xxs:flex-col w-full text-center space-x-16 xxs:space-x-0">
              <div className="my-8">
                <div className="">
                  <div className="font-poppins">
                    <h4 className="text-2xl text-cogengreen font-bold">
                      5.0 kW
                    </h4>
                    <p className="my-2 leading-relaxed">System size</p>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <div className="">
                  <div className="font-poppins">
                    <h4 className="text-2xl text-cogengreen font-bold">
                      161.10 kWh
                    </h4>
                    <p className="my-2 leading-relaxed">Monthly yield</p>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <div className="">
                  <div className="font-poppins">
                    <h4 className="text-2xl text-cogengreen font-bold">
                      $145.67
                    </h4>
                    <p className="my-2 leading-relaxed">Monthly savings</p>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <div className="">
                  <div className="font-poppins">
                    <h4 className="text-2xl text-cogengreen font-bold">
                      3.51 MWh
                    </h4>
                    <p className="my-2 leading-relaxed">Total yield</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4">
            <Buttons text={"Co-own"}  id={"coOwn"}   paddingY={'xs'} btnColor={'primary'} textColor={'white'} width={'xs'} />
            </div>
            <div>
              <div className="flex items-center space-x-1 font-bold">
                <a href="" className="text-cogengreen">
                  View More Case Studies
                </a>
                <div>
                  {" "} 
                  <ArrowIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ColumnCards;
