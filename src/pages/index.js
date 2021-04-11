import React from "react";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Hero from "components/hero";
import SectionWelcome from "components/section_welcome";
import Cta from "components/section_CTA";
import LogoClouds from "components/section_logoClouds";
import SectionTestimonials from "components/section_testimonials";
import SectionWorks from "components/section_works";
import SectionJfy from "components/section_jfy";
import SectionFeatureOne from "components/section_featureOne";
import SectionFeatureTwo from "components/section_featureTwo";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <SectionWelcome />
      <SectionWorks/>
      <SectionFeatureTwo/>
      <SectionJfy/>
      <SectionFeatureOne/>
      <SectionTestimonials/>
      <LogoClouds />
      <Cta />
      <Footer />
    </>
  );
};

export default HomePage;
