import React from "react";
import ArrowIcon from "public/assets/arrow-icon-green.svg";
import { getImageUrl } from "src/helpers/utils.service";

const BlogHeading = ({ title, description, ...props }) => {
  return (
    <section className="relative blogHero w-full overflow-hidden bg-cover bg-no-repeat bg-center">
      <img
        src={getImageUrl(props?.cover?.formats?.large?.url)}
        className="w-full object-cover"
      />

      <div className="bg-white py-12 w-10/12 pl-10  xxs:mx-10 absolute bottom-0 right-0  xxs:px-12 flex flex-start">
        <div className="float-left">
          <h5 className="text-gray-400 text-sm font-poppins tracking-widest font-semibold uppercase mb-6 sm:text-sm md:text-lg lg:text-sm xs:text-lg xxs:text-3xl">
            {props?.tag}
          </h5>
          <h1 className="text-6xl mb-4 font-playfair leading-normal sm:text-base md:text-6xl lg:text-6xl xxs:text-3xl font-bold">
            {title}
          </h1>
          <p className="text-xl my-6  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-semibold">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHeading;
