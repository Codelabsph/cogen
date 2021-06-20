import React from "react";
import ArrowIcon from "public/assets/arrow-icon-green.svg";
import { getImageUrl } from "src/helpers/utils.service";
import { useRouter } from "next/router";

const BlogHero = ({ subHeading, title, description, ...props }) => {
  const router = useRouter();

  const handleRouting = (id) => {
    return router.push({
      pathname: `/blogs/${id}`,
    });
  };

  return (
    <section className="relative h-screen">
      <img
        className="w-full bg-center bg-no-repeat bg-cover max-w-full"
        src={getImageUrl(props?.cover?.formats?.large?.url)}
      />
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-56 xxl:vh-20 bg-opacity-10 bg-black flex items-center">
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
                <a
                  className="text-cogengreen cursor-pointer"
                  onClick={() => handleRouting(props?.id)}
                >
                  Read More
                </a>
                <div>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
