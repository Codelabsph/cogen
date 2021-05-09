import React from "react";

const SectionFeatureOne = () => {
  return (
    <>
      <div className=" bg-gray-100 h-screen w-full  absolute"></div>
      <section className=" w-full bg-white px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pb-24">
        <h1 className="z-50 relative text-3xl font-bold font-playfair  mt-10  sm:text-3xl md:text-5xl lg:text-6xl  xxs:text-5xl">
          See our Live Pilot Case Site
        </h1>
        <div className=" flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins xxs:text-center">
          <div className="w-1/2 lg:w-1/2 lg:px-8  md:w-full xxs:w-full sm:w-full">
            <div className="z-50 relative " id="featureImg"></div>
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
              <button
                type="button"
                className="py-3 bg-cogengreen hover:bg-secondary hover:text-primary  text-white w-44 transition ease-in duration-200 text-lg font-bold  rounded-lg"
              >
                Co-own
              </button>
            </div>
            <div>
              <div className="flex items-center space-x-1 font-bold">
                <a href="" className="text-cogengreen">
                  View More Case Studies
                </a>
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
        <h1 className="z-50 relative mt-20 font-bold font-playfair  sm:text-3xl md:text-5xl lg:text-4xl  xxs:text-5xl">
          Selected Sites
        </h1>
        <div className=" flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins xxs:text-center">
          <div className="w-1/3 lg:w-1/3 lg:px-8  md:w-full xxs:w-full sm:w-full">
            <div className="z-50 relative">
              <div className="img-cont rounded-md overflow-hidden w-full h-96">
                <img className=" " src="../assets/img/g1.jpg" />
              </div>
              <h4 className="font-bold py-4">Mandaluyong Project</h4>
            </div>
          </div>
          <div className="w-1/3 lg:w-1/3 lg:px-8  md:w-full xxs:w-full sm:w-full">
            <div className="z-50 relative">
              <div className="img-cont rounded-md overflow-hidden w-full h-96 ">
                <img className=" " src="../assets/img/welcomeImg.jpeg" />
              </div>
              <h4 className="font-bold py-4">Marikina Project</h4>
            </div>
          </div>
          <div className="w-1/3 lg:w-1/3 lg:px-8  md:w-full xxs:w-full sm:w-full">
            <div className="z-50 relative">
              <div className="img-cont rounded-md overflow-hidden w-full h-96 ">
                <img className=" " src="../assets/img/g1.jpg" />
              </div>
              <h4 className="font-bold py-4">Coming Soon...</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFeatureOne;
