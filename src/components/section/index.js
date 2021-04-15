import React from "react";
const SectionWelcome = ({title, subTitle, children}) => {
  return (
    <>
      <section class="w-full bg-white px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
        <h1 class="text-7xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
          {title}
        </h1>
        <p class="text-xl font-poppins my-10">
         {subTitle}
        </p>
        <div className="flex">
        {children}
        </div> 
      </section>
    </>
  );
};

export default SectionWelcome;
