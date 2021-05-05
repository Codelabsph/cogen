import React, { useState } from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Map from "src/components/map";
import Section from "src/components/section";
import Buttons from "src/components/buttons";
import InputFields from "src/components/inputFields";

const Calculate = () => {
  return (
    <>
      <Navbar />
      <Section>
        <h1 className="text-6xl mb-4 font-playfair leading-normal sm:text-base md:text-6xl lg:text-6xl xxs:text-3xl font-bold">
          Let's Calculate your savings!
        </h1>
      </Section>
      <Section>
        <div className="w-2/3 flex">
          <InputFields />
          <Buttons btnColor="primary" text="Change" />
        </div>
      </Section>
      <Map />
      <Footer />
    </>
  );
};

export default Calculate;
