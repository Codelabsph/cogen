import React from "react";

const Hero = () => {
  return (
    <>
      <div class="w-full h-screen bg-center bg-no-repeat bg-cover">
        <div class="w-full h-screen bg-opacity-50 bg-black flex items-center">
          <div class="mx-40 text-black ">
            <h5 class="text-lg font-poppins tracking-wider uppercase my-4">
              Search for your home.
            </h5>
            <h1 class="text-6xl mb-4 font-playfair leading-normal">
              Discover your solar <br />
              savings potential!
            </h1>
            <p class="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nunc odio in et, lectus sit lorem id integer.
            </p>

            <div>
              <div class="flex rounded-md  mt-6">
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="font-manrope block w-6/12 px-3 py-2 rounded-r-none rounded-l-md sm:text-sm focus:outline-none "
                  placeholder="Your work email address"
                  
                ></input>
                <button class="inline-flex items-center  font-manrope px-7 py-4 rounded-r-md  bg-primary text-white  text-md  hover:bg-secondary hover:text-primary sm:text-sm  focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
