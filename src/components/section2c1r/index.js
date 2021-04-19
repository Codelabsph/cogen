import React from "react";
const SectionWelcome = ({ title, subtitle, firstColumn, secondColumn, logo,subtitleTwo, subtitleThree}) => {
  return (
    <>
      <section className="max-w-full bg-white px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24">
        <h1 className="text-7xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
          {title}
        </h1>
        <p className="text-lg font-poppins my-8">{subtitle && subtitle}</p>
        <div className="flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins">
          <div className="w-1/2 lg:w-1/2  sm:w-full xxs:w-full lg:px-8">
            <p className="text-lg font-poppins mb-6">{subtitleTwo && subtitleTwo}</p>
            <p className="text-lg font-poppins">{subtitleThree && subtitleThree}</p>
            <div className="mt-20 xxs:text-center ">{firstColumn}</div>
          </div>
          <div className="w-1/2 lg:w-1/2  sm:w-full xxs:w-full lg:px-8">
           <div>{logo && logo}</div> 
            <div className="mt-20 xxs:text-center">{secondColumn}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWelcome;
