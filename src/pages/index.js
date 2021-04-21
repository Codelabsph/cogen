import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Hero from "src/components/hero";
import Cta from "src/components/section_CTA";
import LogoClouds from "src/components/section_logoClouds";
import SectionTestimonials from "src/components/section_testimonials";
import SectionWorks from "src/components/section_works";
import SectionJfy from "src/components/section_jfy";
import SectionFeatureOne from "src/components/section_featureOne";
import Section from "src/components/section";
import IconWithText from "src/components/iconWithText";
import IconOne from "public/assets/icon-w-itemOne.svg";
import IconTwo from "public/assets/icon-w-itemTwo.svg";
import IconThree from "public/assets/icon-w-itemThree.svg";
import Logo from "public/assets/logo.svg";
import FullCard from "src/components/fullCard";
import IconJfyOne from "public/assets/icon-jfy-one.svg";
import IconJfyTwo from "public/assets/icon-jfy-two.svg";
import IconJfyThree from "public/assets/icon-jfy-three.svg";
import IconJfyFour from "public/assets/icon-jfy-four.svg";
import SimpleCard from "src/components/simpleCard";
import CoverImage from "src/components/coverImage";
import ClickableCards from "src/components/clickableCards";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section margin={"s"} />
      <Section
        title={"Who CoGen.energy is"}
        subTitle={
          "We are a digital company reinventing access to clean energy."
        }
      >
        <SimpleCard
          paragraph={
            "We offer a platform that creates opportunities for energy consumers and other stakeholders to participate and benefit from the clean energy transition."
          }
          image={<Logo />}
        />
      </Section>
      <Section>
        <div>
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
        </div>
        <div>
          <CoverImage image={<img src={"assets/img/welcomeImg.jpeg"} />} />
        </div>
      </Section>
      <Section title={"How to save"}>
        <ClickableCards />
      </Section>
      <Section>
        <FullCard />
      </Section>
      <Section title={"Just for you"}>
        <div>
          <IconWithText
            icon={<IconJfyOne />}
            title={"Cost reduction"}
            paragraph={"Save electricity bills up to 50% through solar. "}
          />
          <IconWithText
            icon={<IconJfyTwo />}
            title="Ease of use"
            paragraph={
              "Streamlined sales and acquisition process for owning a solar system."
            }
          />
        </div>
        <div>
          <IconWithText
            icon={<IconJfyThree />}
            title={"Co2 reduction"}
            paragraph={
              "Help reduce carbon emissions by utilizing clean energy solutions."
            }
          />
          <IconWithText
            icon={<IconJfyFour />}
            title={"New Revenue stream"}
            paragraph={"Make money while doing the right thing."}
          />
        </div>
      </Section>
      {/* 
      <SectionFeatureOne />
      <SectionTestimonials />
      <LogoClouds />
      <Cta /> */}
      <Footer />
    </>
  );
};

export default HomePage;
