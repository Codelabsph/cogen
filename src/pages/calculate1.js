import React from "react";
import Footer from "src/components/footer";
import Section from "src/components/section";
import Navbar from "src/components/navbar";
import PersonalizeCard from "src/components/personalizeCard"
import MapDetails from "src/components/mapDetails";

const Calculate = () => {
  return (
    <>
      <Navbar />
      <Section></Section>
      <Section>
        <MapDetails address="90 Bedford Street, New York, NY, USA" />
      </Section>
      <Section>
        <PersonalizeCard/>
      </Section>

      <Footer />
    </>
  );
};

export default Calculate;
