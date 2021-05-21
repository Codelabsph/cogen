import React, { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const [place, setPlace] = useState({});

  const { ref } = usePlacesWidget({
    onPlaceSelected: async (place) => {
      setPlace(place);
    },
  });

  const handleGoCalculate = () => {
    const lat = place?.geometry?.location?.lat();
    const lng = place?.geometry?.location?.lng();

    return router.push({
      pathname: "/calculate",
      query: { address: place?.formatted_address, lat, lng },
    });
  };

  return (
    <>
      <section id="image" className="w-full bg-center bg-no-repeat bg-cover">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-56 h-screen xxl:vh-20 bg-opacity-10 bg-black flex items-center">
          <div className="text-black  xxs:mx-10">
            <h5 className="text-sm font-poppins tracking-widest font-semibold uppercase mb-10 sm:text-sm md:text-lg lg:text-sm xs:text-lg xxs:text-3xl">
              Start Investing
            </h5>
            <h1 className="text-6xl mb-4 font-playfair leading-normal sm:text-base md:text-6xl lg:text-6xl xxs:text-3xl font-bold">
              Discover your solar <br />
              savings potential!
            </h1>
            <p className="text-xl my-6  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-semibold">
              Lower your monthly electric bills by going solar now! Know how
              much <br /> you can save through our solar calculator.
            </p>
            <div>
              <div className="flex rounded-md  mt-6">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="font-manrope block w-6/12 xxs:w-full px-3 py-2 rounded-r-none rounded-l-md sm:text-sm focus:outline-none "
                  placeholder="Your address"
                  ref={ref}
                />
                <button
                  onClick={handleGoCalculate}
                  className="inline-flex items-center font-bold  font-manrope px-7 py-4 rounded-r-md  bg-primary text-white  text-md  hover:bg-secondary hover:text-primary sm:text-sm  focus:outline-none"
                >
                  Calculate savings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
