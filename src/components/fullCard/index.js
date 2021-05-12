import React from "react";
import Wave1 from "public/assets/fullCardsWaves.svg"
import Wave2 from "public/assets/fullCardsWaves2.svg"
const FullCard = ({ title, paragraph, icon, explore }) => {
  return (
    <div class="relative w-full border-gray-200 rounded-xl border-2 p-16 mx-auto shadow-lg overflow-hidden">
      <div className="z-50 absolute top-0 right-0">
      <Wave1/>
      </div>
      <div className="z-0 absolute top-0 right-0">
        <Wave2/>
      </div>
      <div className=" font-poppins content xxs:mt-24  ">
        <h1 className="text-4xl font-bold font-playfair mb-6 xxs:text-2xl">
          No property?
        </h1>
        <p className="text-2xl xxs:text-lg">
          You don't need to have your own solar rooftop installation to join the
          energy transition.
          <br /> Help the environment while earning money through{" "}
          <span>
            <a class="text-cogengreen font-semibold" href="">
              our co-ownership program
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default FullCard;
