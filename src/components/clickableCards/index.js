import React from "react";

const ClickableCards = () => {
  return (
    <>
      <div className="flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins">
        <div className="z-50  w-1/2  md:w-full xxs:w-full sm:w-full xxs:py-4 ">
          <div className="mx-8">
            <img className=" w-full xxs:h-auto  " src="../assets/img/g1.jpg" />
          </div>
        </div>
        <div className="z-50  w-1/2  md:w-full xxs:w-full sm:w-full lg:px-8">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-content-center h-2/6 bg-cogengreen">
              <div className="p-14">
                <div className="flex items-center flex-row xxs:flex-col ">
                  <div className=" text-center">
                    <div className="flex items-center justify-center h-24 w-24 rounded-full mb-2 bg-white">
                      <span className="text-6xl font-bold text-green-200">
                        1
                      </span>
                    </div>
                    <span className="tracking-widest text-white text-base uppercase">
                      Search
                    </span>
                  </div>
                  <div className="ml-10 xxs:ml-0">
                    <h5 className="text-xl xxs:text-center xxs:my-5 leading-6 text-white font-bolder mb-5 xxs:font-base">
                      Search for your home
                    </h5>
                    <p className="mt-2 text-base leading-6 text-white text-justify">
                      We use Google Earth imagery to analyze your roof shape and
                      local weather patterns to create a personalized solar
                      plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2/6 bg-green-200">
              <div className="p-14">
                <div className="flex items-center xxs:flex-col ">
                  <div className=" items-center">
                    <div className="flex items-center justify-center h-24 w-24 rounded-full mb-2 bg-white text-white">
                      <span className="text-6xl font-bold text-green-200">
                        2
                      </span>
                    </div>
                    <span className="tracking-widest text-black text-xs font-bold uppercase">
                      personalize
                    </span>
                  </div>
                  <div className="ml-10 xxs:ml-0">
                    <h5 className="text-xl leading-6  xxs:text-center xxs:my-5 text-black  font-bold mb-5 xxs:font-base">
                      Personalize your solar analysis
                    </h5>
                    <p className="mt-2 text-base leading-6 text-black text-justify">
                      Adjust your electric bill to fine-tune your savings
                      estimate and the recommended number of solar panels for
                      your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2/6 bg-green-200">
              <div className="p-14">
                <div className="flex items-center xxs:flex-col ">
                  <div className=" text-center">
                    <div className="flex items-center justify-center h-24 w-24 rounded-full mb-2 bg-white text-white">
                      <span className="text-6xl font-bold text-green-200">
                        3
                      </span>
                    </div>
                    <span className="tracking-widest text-black text-base font-bold uppercase">
                      Select
                    </span>
                  </div>
                  <div className="ml-10 xxs:ml-0">
                    <h5 className="text-xl leading-6 xxs:text-center xxs:my-5 text-black  font-bold mb-5 xxs:font-base">
                      Compare and select finance
                      <br />
                      options
                    </h5>
                    <p className="mt-2 text-base leading-6 text-black  text-justify">
                    Choose between our pay-per-use or outright purchase package
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickableCards;
