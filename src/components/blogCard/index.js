import React from "react";
import ArrowIcon from "public/assets/arrow-icon.svg";
import { useRouter } from "next/router";

const BlogCard = ({ subHeading, title, description, src, ...props }) => {
  const defaultSrc = "/assets/img/blogImg2.png";
  const router = useRouter();
  const handleRouting = (id) => {
    return router.push({
      pathname: `/blogs/${id}`,
    });
  };

  return (
    <div className="relative shadow-lg overflow-hidden blogCard">
      <img
        className="w-full object-cover h-full"
        src={src || defaultSrc}
        alt="Mountain"
      />
      <div className="bg-white bottom-0 right-0 absolute w-80 p-4">
        <h5 className="text-gray-400 text-sm font-poppins tracking-widest font-semibold uppercase  sm:text-sm md:text-lg lg:text-sm xs:text-lg">
          {subHeading}
        </h5>
        <h1 className="text-2xl  font-playfair leading-normal  xxs:text-xl font-bold">
          {title}
        </h1>

        <p className="text-sm  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-poppins">
          {description}
          <button
            className="w-8 h-8 rounded-full flex justify-center items-center bg-primary float-right"
            onClick={() => handleRouting(props?.id)}
          >
            <ArrowIcon />
          </button>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
