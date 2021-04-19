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
import Section2c1r from "src/components/section2c1r";
import Section2c2r from "src/components/section2c2r";
import IconWithText from "src/components/iconWithText";
import IconWithTextTwo from "src/components/iconWithTextTwo";
import IconOne from "public/assets/icon-w-itemOne.svg";
import IconTwo from "public/assets/icon-w-itemTwo.svg";
import IconThree from "public/assets/icon-w-itemThree.svg";
import Logo from "public/assets/logo.svg";
import FullCard from "src/components/full-card";
import IconJfyOne from "public/assets/icon-jfy-one.svg";
import IconJfyTwo from "public/assets/icon-jfy-two.svg";
import IconJfyThree from "public/assets/icon-jfy-three.svg";
import IconJfyFour from "public/assets/icon-jfy-four.svg";
import ImageLoader from "next/image";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section2c1r
        title={"Who CoGen.energy is"}
        subtitleTwo={
          "We are a digital company reinventing access to clean energy. "
        }
        subtitleThree={
          "We offer a platform that creates opportunities for energy consumers and other stakeholders to participate and benefit from the clean energy transition."
        }
        firstColumn={
          <>
            <IconWithText
              icon={<IconOne />}
              title="Co-owning and Co-generating"
              paragraph="Join the energy transition whether you have a roof property or not through our co-generation and co-ownership packages."
            />
            <IconWithText
              icon={<IconTwo />}
              title="Accredited solar solution providers"
              paragraph="Have access to accredited solar solution providers based on your estimated system size at shorter turnaround time."
            />
            <IconWithText
              icon={<IconThree />}
              title="Online monitoring of solar rooftop system"
              paragraph="Know the generation performance and energy savings of your system anytime and anywhere through an online monitoring app."
            />
          </>
        }
        logo={<Logo />}
        secondColumn={
          <>
            <div id="welcomeImg"></div>
            {/* <img  className="object-cover" src="/assets/img/welcomeImg.jpeg"   alt="me"/> */}
          </>
        }
      ></Section2c1r>
      <SectionFeatureTwo />
      <FullCard />
      <Section2c2r
        heading={"Just For You"}
        subtitle={
          "Get the benefits of owning and saving from clean energy even without having your own property."
        }
        col1={
          <>
            <IconWithTextTwo
              icon={<IconJfyOne />}
              heading={"Cost reduction"}
              contentSub={"Save electricity bills up to 50% through solar. "}
            />
            <IconWithTextTwo
              icon={<IconJfyTwo />}
              heading="Ease of use"
              contentSub={"Streamlined sales and acquisition process for owning a solar system."}
            />
          </>
        }
        col2={
          <>
            <IconWithTextTwo
              icon={<IconJfyThree />}
              heading={"Co2 reduction"}
              contentSub={"Help reduce carbon emissions by utilizing clean energy solutions."}
            />
            <IconWithTextTwo
              icon={<IconJfyFour/>}
              heading={"New Revenue stream"}
              contentSub={"Make money while doing the right thing."}
            />
          </>
        }
      ></Section2c2r>
      <SectionFeatureOne />
      <SectionTestimonials />
      <LogoClouds />
      <Cta />
      <Footer />
    </>
  );
};

export default HomePage;
