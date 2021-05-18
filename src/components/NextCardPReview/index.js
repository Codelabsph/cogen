import React from "react";
import TextWithHeading from "src/components/textWithHeading";
import CogenShadeIcon from "public/assets/cogen-shade-icon.svg";
import HeadingWithText from "src/components/headingWithText";

const NextCardPreview = () => {
  return (
    <div className=" flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8   font-poppins xxs:text-center">
      <div className="w-1/2 lg:w-1/2 lg:px-8  md:w-full xxs:w-full sm:w-full">
        <div className="z-50 relative">
          <img
            className="w-full xxs:h-auto"
            src="../assets/img/case-card2.png"
          />
        </div>
      </div>

      <div className=" z-50 relative  w-1/2 lg:w-1/2 md:w-full xxs:w-full sm:w-full lg:px-8">
        <div className="xxs:py-12">
          <CogenShadeIcon />
        </div>

        <p className="text-lg my-2">Co-owner Slots</p>

        <div className="flex flex-row py-4 space-x-14 xxs:flex-col xxs:space-x-0">
          <div className="">
            <TextWithHeading title="Mandaluyong City" content="location" />
            <TextWithHeading title="Residential" content="Classification" />
            <TextWithHeading title="100sqm" content="Roof Size" />
            <TextWithHeading
              title="Grid-tied solar PV system"
              content="Panel Type"
            />
          </div>
          <div className="">
            <TextWithHeading
              title="June 24, 2020"
              content="Installation Date"
            />
            <TextWithHeading
              title="Php 2,500+"
              content="Average Monthly Bill"
            />
            <TextWithHeading title="5kW" content="System Size" />
            <TextWithHeading title="Co-Generating" content="Status" />
          </div>
        </div>
        <div className="flex flex-row my-4 xxs:flex-col w-full text-center  justify-between space-x-24 xxs:space-x-0">
          <HeadingWithText title="" content="Total yield" />
          <HeadingWithText title="" content="Monthly yield" />
          <HeadingWithText title="" content="Monthly savings" />
          <HeadingWithText title="" content="CO2 Reduction" />
        </div>
      </div>
    </div>
  );
};

export default NextCardPreview;
