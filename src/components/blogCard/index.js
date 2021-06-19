import React from "react";
import Wave1 from "public/assets/blog-wave.svg";
import Wave2 from "public/assets/blog-wave1.svg";

const BlogCard = ({ subHeading, title, description, src}) => {
   
  return (
    <div class=" relative w-full shadow-lg overflow-hidden">
    <img
      class="w-full"
      class="object-fit"
      src={src}
      alt="Mountain"
    />

 
    <div class="bg-white bottom-0 right-0 absolute w-80 p-4">
    <h5 className="text-gray-400 text-sm font-poppins tracking-widest font-semibold uppercase  sm:text-sm md:text-lg lg:text-sm xs:text-lg">
      {subHeading}
    </h5>
    <h1 className="text-2xl  font-playfair leading-normal  xxs:text-xl font-bold">
      {title}
    </h1>

    <p className="text-sm  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-poppins">
       {description}
      <button className="w-8 h-8 rounded-full flex justify-center items-center bg-primary float-right"></button>
    </p>
  </div>
  </div>
  );
};

export default BlogCard;
