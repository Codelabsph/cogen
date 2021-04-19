import React from "react";

const SectionFeatureOne = () => {
  return (
    <>
      <section class="w-full bg-white px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pb-24">
        <h1 class="text-3xl font-bold font-playfair    sm:text-3xl md:text-5xl lg:text-6xl  xxs:text-5xl">
          See our Live Pilot Case Site
        </h1>
        <div class="flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins xxs:text-center">
          <div class="w-1/2 lg:w-1/2 lg:px-8  md:w-full xxs:w-full sm:w-full">
          <div id="featureImg"></div>
          </div>

          <div class="w-1/2 lg:w-1/2 md:w-full xxs:w-full sm:w-full lg:px-8">
            <p class="text-lg py-4">
              Solar savings are calculated using roof size and shape, shaded
              roof areas, local weather, local electricity prices, solar costs,
              and estimated incentives over time. Using a sample address, take a
              look at the detailed estimate Project Sunroof can give you.
            </p>
            <h2 class="text-lg font-bold my-8 ">
            Mandaluyong Project  <span className="font-normal ml-5 xxs:ml-0">Installed on June 24, 2020</span>
            </h2>
            <div class="flex flex-row my-16 xxs:flex-col w-full text-center space-x-16 xxs:space-x-0">
              <div class="my-8">
                <div class="">
                  <div class="font-poppins">
                    <h4 class="text-2xl text-cogengreen font-bold">5.0 kW</h4>
                    <p class="my-2 leading-relaxed">System size</p>
                  </div>
                </div>
              </div>
              <div class="my-8">
                <div class="">
                  <div class="font-poppins">
                    <h4 class="text-2xl text-cogengreen font-bold">161.10 kWh</h4>
                    <p class="my-2 leading-relaxed">Monthly yield</p>
                  </div>
                </div>
              </div>
              <div class="my-8">
                <div class="">
                  <div class="font-poppins">
                    <h4 class="text-2xl text-cogengreen font-bold">$145.67</h4>
                    <p class="my-2 leading-relaxed">Monthly savings</p>
                  </div>
                </div>
              </div>

              <div class="my-8">
                <div class="">
                  <div class="font-poppins">
                    <h4 class="text-2xl text-cogengreen font-bold">3.51 MWh</h4>
                    <p class="my-2 leading-relaxed">Total yield</p>
                  </div>
                </div>
              </div>
            </div>
            
        

            <div class="my-10">
            <button
                type="button"
                class="py-3   bg-cogengreen hover:bg-secondary hover:text-primary  text-white w-60 transition ease-in duration-200 text-center text-lg font-bold  rounded-lg">
             Check my property
              </button>
            </div>
            <div>
            <div class="flex items-center space-x-1 font-bold">
                    <a  href="" class="text-cogengreen">View More Case Studies</a>
                    <div>
                      {" "}
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1958 1.47145C9.9354 1.2111 9.9354 0.788986 10.1958 0.528636C10.4561 0.268287 10.8782 0.268287 11.1386 0.528636L15.1386 4.52864C15.3989 4.78899 15.3989 5.2111 15.1386 5.47144L11.1386 9.47144C10.8782 9.73179 10.4561 9.73179 10.1958 9.47144C9.9354 9.21109 9.9354 8.78899 10.1958 8.52864L13.0577 5.6667H1.34101C0.968761 5.6667 0.666992 5.36822 0.666992 5.00003C0.666992 4.63184 0.968761 4.33336 1.34101 4.33336H13.0577L10.1958 1.47145Z"
                          fill="#22C680"
                        />
                      </svg>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFeatureOne;
