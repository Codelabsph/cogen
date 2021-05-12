import React from "react";
import IconWithText from "src/components/iconWithText";
import PigIcon from "public/assets/pig-icon.svg";
import SocketIcon from "public/assets/socket-icon.svg";
import SolarIcon from "public/assets/solar-icon.svg";
import Smallcogen from "public/assets/icon-smallcogen.svg";
const MapDetails = ({address}) => {
  return (
    <>
      <div className="w-1/2 xxs:w-full">
        <h1 className="text-7xl z-50 mt-10 font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
          Your potential savings!
        </h1>
        <h1 className="text-2xl z-50 mt-10 mb-4 font-bold font-poppins tracking-widest  sm:text-base md:text-2xl lg:text-2xl xxs:text-3xl">
        {address && address}
        </h1>
        <small className="text-lg">Address</small>
      </div>
      <div className=" w-1/2 flex flex-row space-x-2 xxs:flex-col xxs:w-full ">
        <div className="">
          <IconWithText
            icon={<SocketIcon />}
            title="1,746 kWh"
            paragraph="Estimated energy ourput for a year"
          />
          <IconWithText
            icon={<PigIcon />}
            title="$10,000"
            paragraph="Estimated savings over 10 years"
          />
        </div>
        <div>
          <IconWithText
            icon={<SolarIcon />}
            title="634 sq feet"
            paragraph="Available area for solar panels"
          />
          <IconWithText
            icon={<Smallcogen />}
            marginTop="xs"
            title="and more..."
          />
        </div>
      </div>
    </>
  );
};

export default MapDetails;
