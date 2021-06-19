import React from "react";
import ArrowIcon from "public/assets/arrow-icon.svg";

const BlogHero = ({ subHeading, title, description}) => {
   
  return (
    <section
    id="blogSection"
    className="w-full bg-center bg-no-repeat bg-cover"
  >
    <div className="w-full mx-auto px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-56 h-screen xxl:vh-20 bg-opacity-10 bg-black flex items-center">
      <div className="bg-white py-12 px-56 xxs:mx-10 absolute bottom-0 left-0  xxs:px-12">
        <h5 className="text-gray-400 text-sm font-poppins tracking-widest font-semibold uppercase mb-6 sm:text-sm md:text-lg lg:text-sm xs:text-lg xxs:text-3xl">
          {subHeading}
        </h5>
        <h1 className="text-6xl mb-4 font-playfair leading-normal sm:text-base md:text-6xl lg:text-6xl xxs:text-3xl font-bold">
         {title}
        </h1>
        <p className="text-xl my-6  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-semibold">
         {description}
        </p>
        <p className="text-xl my-6  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-semibold">
          <div>
            <div className="flex items-center space-x-1 font-bold">
              <a className="text-cogengreen cursor-pointer">Read More</a>
              <div>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </p>
        <div></div>
      </div>
    </div>
  </section>
  );
};

export default BlogHero;
