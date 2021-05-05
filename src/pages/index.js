import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Hero from "src/components/hero";
import Section from "src/components/section";
import IconWithText from "src/components/iconWithText";
import IconOne from "public/assets/icon-w-itemOne.svg";
import IconTwo from "public/assets/icon-w-itemTwo.svg";
import Comma from "public/assets/comma.svg";
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
import ColumnCards from "src/components/columnCards";
import ImageContainer from "src/components/imageContainer";
import FeedbackCarousel from "src/components/feedbackCarousel";
import FeedbackCarouselItem from "src/components/feedbackCarouselItem";
import LogoContainer from "src/components/logoContainer";

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
        padding={"s"}
      >
        <SimpleCard
          paragraph={
            "We offer a platform that creates opportunities for energy consumers and other stakeholders to participate and benefit from the clean energy transition."
          }
          image={<Logo />}
        />
      </Section>

      <Section padding={"s"}>
        <div className="w-1/2 sm:w-full xxs:w-full xs:w-full">
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
        <div className="w-1/2 sm:w-full xxs:w-full xs:w-full">
          <div>
            <CoverImage
              image={<img className="" src={"assets/img/welcomeImg.jpeg"} />}
            />
          </div>
        </div>
      </Section>
      <Section title={"How to save"} isFlexCol={false}>
        <ClickableCards />
      </Section>
      <Section>
        <FullCard />
      </Section>
      <Section title={"Just for you"} isFlexCol={false}>
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
      <Section title={"Your Co-owning Opportunity"} isFlexCol={false}>
        <ColumnCards />
      </Section>
      <Section title={"Selected Sites"}>
        <ImageContainer
          img={"../assets/img/g1.jpg"}
          title="Mandaluyong project"
        />
        <ImageContainer
          img={"../assets/img/g1.jpg"}
          title="Mandaluyong project"
        />
        <ImageContainer
          img={"../assets/img/g1.jpg"}
          title="Mandaluyong project"
        />
      </Section>
      <FeedbackCarousel>
        <div>
          <FeedbackCarouselItem
            carouselId={"carousel-1"}
            status={"checked"}
            icon={<Comma />}
            name={"Rollie"}
            position={"Co-Generator"}
            feedback={
              "How do we make our house sustainable? One is to use solar power to reduce our carbon emission. I'm happy to say that, for the first month, our carbon dioxide reduction is around 236.5 kg. However, solar panels are so expensive. Thanks to CoGen!! They offer several options so that  sustainable homes that are powered by solar energy will become possible and affordable. "
            }
          />
          <FeedbackCarouselItem
            carouselId={"carousel-2"}
            icon={<Comma />}
            name={"Rollie2"}
            position={"Co-Generator"}
            feedback={
              "How do we make our house sustainable? One is to use solar power to reduce our carbon emission. I'm happy to say that, for the first month, our carbon dioxide reduction is around 236.5 kg. However, solar panels are so expensive. Thanks to CoGen!! They offer several options so that  sustainable homes that are powered by solar energy will become possible and affordable. "
            }
          />
          <FeedbackCarouselItem
            carouselId={"carousel-3"}
            icon={<Comma />}
            name={"Rollie3"}
            position={"Co-Generator"}
            feedback={
              "How do we make our house sustainable? One is to use solar power to reduce our carbon emission. I'm happy to say that, for the first month, our carbon dioxide reduction is around 236.5 kg. However, solar panels are so expensive. Thanks to CoGen!! They offer several options so that  sustainable homes that are powered by solar energy will become possible and affordable. "
            }
          />
        </div>
      </FeedbackCarousel>
      <LogoContainer />
      <Footer />
    </>
  );
};

export default HomePage;
