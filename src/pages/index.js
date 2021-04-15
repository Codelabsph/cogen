import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Hero from "src/components/hero";
import SectionWelcome from "src/components/section_welcome";
import Cta from "src/components/section_CTA";
import LogoClouds from "src/components/section_logoClouds";
import SectionTestimonials from "src/components/section_testimonials";
import SectionWorks from "src/components/section_works";
import SectionJfy from "src/components/section_jfy";
import SectionFeatureOne from "src/components/section_featureOne";
import SectionFeatureTwo from "src/components/section_featureTwo";
import Section from "src/components/section";
import IconWithText from "src/components/iconWithText";
import Sample from "public/assets/sample.svg"
import ImageLoader from "next/image";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title={"What is Cogen"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur vitae nunc sed velit. Odio aenean sed adipiscing diam. Consectetur lorem donec massa sapien faucibus et molestie. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Nisi lacus sed viverra tellus in hac habitasse platea. Eu consequat ac felis donec. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Tincidunt dui ut ornare lectus sit amet est. Imperdiet massa tincidunt nunc pulvinar. Malesuada fames ac turpis egestas. Ultricies mi eget mauris pharetra et. Enim nulla aliquet porttitor lacus. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Facilisis volutpat est velit egestas dui. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Erat velit scelerisque in dictum non consectetur a. Volutpat commodo s"
        }
      >
        <div>
          <IconWithText
            icon={<Sample />}
            title="pasagi bobo"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur vitae nunc sed velit. Odio aenean sed adipiscing diam"
          />
          <IconWithText
            icon={<Sample />}
            explore={"https://www.facebook.com/"}
            title="pasagi bobo"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur vitae nunc sed velit. Odio aenean sed adipiscing diam"
          />
          <IconWithText
            icon={<Sample />}
            title="pasagi bobo"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur vitae nunc sed velit. Odio aenean sed adipiscing diam"
          />
        </div>
        <div>
          <ImageLoader
            src="/assets/img/image.png"
            alt="me"
            width="100"
            height="100"
          />
        </div>
      </Section>
      <SectionWelcome />
      <SectionWorks />
      <SectionFeatureTwo />
      <SectionJfy />
      <SectionFeatureOne />
      <SectionTestimonials />
      <LogoClouds />
      <Cta />
      <Footer />
    </>
  );
};

export default HomePage;
