import React from "react";
import Section from "src/components/section";
import Map from "src/components/map";

const CoOwn = () => {
  return (
    <>
      <Section title={"Let’s calculate your savings!"} marginTop={"lg"}>
        <div className="w-4/12 ">
          <div className="flex rounded-md border mt-6">
            <input
              type="text"
              name="mapAddress"
              id="mapAddress"
              className="font-manrope block w-full xxs:w-full px-3 py-2 rounded-r-none rounded-l-md sm:text-sm focus:outline-none "
              placeholder="Your address"
            ></input>
            <button className="inline-flex items-center font-bold  font-manrope px-7 py-4 rounded-r-md  bg-primary text-white  text-md  hover:bg-secondary hover:text-primary sm:text-sm  focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </Section>
      <Map />
    </>
  );
};

export default CoOwn;
