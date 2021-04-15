import React from "react";

const Hero = () => {
  return (
    <>
      <section id="image" class="w-full h-screen bg-center bg-no-repeat bg-cover">
        <div class="w-full h-screen bg-opacity-50 bg-black flex items-center">
          <div class="mx-80 text-black  xxs:mx-10">
            <h5 class="text-lg font-poppins tracking-widest font-semibold uppercase my-4 sm:text-lg md:text-lg lg:text-lg xs:text-lg xxs:text-3xl">
             Start Investing
            </h5>
            <h1 class="text-6xl mb-4 font-playfair leading-normal sm:text-base md:text-6xl lg:text-6xl xxs:text-4xl font-bold">
              Discover your solar <br />
              savings potential!
            </h1>
            <p class="text-xl my-6  sm:text-base md:text-lg   lg:text-lg xxs:text-xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nunc odio in et, lectus sit lorem id integer.
            </p>

            <div>
              <div class="flex rounded-md  mt-6">
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="font-manrope block w-6/12 xxs:w-full px-3 py-2 rounded-r-none rounded-l-md sm:text-sm focus:outline-none "
                  placeholder="Your address"
                  
                ></input>
                <button class="inline-flex items-center font-bold  font-manrope px-7 py-4 rounded-r-md  bg-primary text-white  text-md  hover:bg-secondary hover:text-primary sm:text-sm  focus:outline-none">
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
