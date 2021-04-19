import React from "react";

const Section2c2r = ({heading, subtitle,col1, col2}) => {
  return (
    <>
      <section class="w-full bg-white px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-28">
        <h1 class="text-5xl font-bold uppercase font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-5xl xxs:text-3xl">
          {heading}
        </h1>
        <p class="text-xl font-poppins my-10">
         {subtitle}
        </p>
        <div class="flex flex-col md:flex-row lg:-mx-8">
          <div class="w-full lg:w-1/2 lg:px-8">
            <div class="mt-10">
             {col1}
            </div>
          </div>

          <div class="w-full lg:w-1/2 lg:px-8">
            <div class="mt-10">
                {col2}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2c2r;
