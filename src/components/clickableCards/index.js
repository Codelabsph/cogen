import React from "react";

const ClickableCards = () => {
  return (
    <>
        <div class="flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins">
          <div class="z-50   w-1/2  md:w-full xxs:w-full sm:w-full xxs:py-4 ">
            <div className="mx-8">
              <img className="h-screen w-full xxs:h-auto  " src="../assets/img/g1.jpg" />
            </div>
          </div>
          <div class="z-50  w-1/2  md:w-full xxs:w-full sm:w-full lg:px-8">
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-content-center h-2/6 bg-cogengreen">
                <div className="p-14">
                  <div class="flex items-center flex-row xxs:flex-col ">
                    <div class=" text-center">
                      <div class="flex items-center justify-center h-24 w-24 rounded-full mb-2 bg-white">
                        <span class="text-6xl font-bold text-green-200">1</span>
                      </div>
                      <span class="tracking-widest text-white text-base uppercase">
                        Search
                      </span>
                    </div>
                    <div class="ml-10 xxs:ml-0">
                      <h5 class="text-xl xxs:text-center xxs:my-5 leading-6 text-white font-bolder mb-5 xxs:font-base">
                        Search for your home
                      </h5>
                      <p class="mt-2 text-base leading-6 text-white text-justify">
                        We use Google Earth imagery to analyze your roof shape
                        and local weather patterns to create a personalized
                        solar plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-2/6 bg-green-200">
                <div className="p-14">
                  <div class="flex items-center xxs:flex-col ">
                    <div class=" items-center">
                      <div class="flex items-center justify-center h-24 w-24 rounded-full mb-2 bg-white text-white">
                        <span class="text-6xl font-bold text-green-200">2</span>
                      </div>
                      <span class="tracking-widest text-black text-xs font-bold uppercase">
                        personalize
                      </span>
                    </div>
                    <div class="ml-10 xxs:ml-0">
                      <h5 class="text-xl leading-6  xxs:text-center xxs:my-5 text-black  font-bold mb-5 xxs:font-base">
                        Personalize your solar analysis
                      </h5>
                      <p class="mt-2 text-base leading-6 text-black text-justify">
                        Adjust your electric bill to fine-tune your savings
                        estimate and the recommended number of solar panels for
                        your home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="h-2/6 bg-green-200">
                <div className="p-14">
                  <div class="flex items-center xxs:flex-col ">
                    <div class=" text-center">
                      <div class="flex items-center justify-center h-24 w-24 rounded-full mb-2 bg-white text-white">
                        <span class="text-6xl font-bold text-green-200">3</span>
                      </div>
                      <span class="tracking-widest text-black text-base font-bold uppercase">
                        Select
                      </span>
                    </div>
                    <div class="ml-10 xxs:ml-0">
                      <h5 class="text-xl leading-6 xxs:text-center xxs:my-5 text-black  font-bold mb-5 xxs:font-base">
                        Compare and select finance
                        <br />
                        options
                      </h5>
                      <p class="mt-2 text-base leading-6 text-black  text-justify">
                        Compare loan, lease, and purchase options for your solar
                        panels based on your results.
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
