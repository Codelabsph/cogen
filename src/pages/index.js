import React, { useEffect, useState, useMemo } from "react";
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
import ClickableCards from "src/components/clickableCards";
import ProjectDetails from "src/components/projectDetails";
import ImageContainer from "src/components/imageContainer";
import FeedbackCarousel from "src/components/feedbackCarousel";
import FeedbackCarouselItem from "src/components/feedbackCarouselItem";
import LogoContainer from "src/components/logoContainer";
import AbsoluteDiv from "src/components/absoluteDiv";
import Layout from "src/components/layout";
import { useRouter } from "next/router";
import Cta from "src/components/cta";
import { getRealTimeInfo } from "src/helpers/api.service";
import { estimateMonthlySavings } from "src/helpers/calculation.service";

const HomePage = () => {
  const router = useRouter();
  const handleRouting = (to) => {
    return router.push(to);
  };

  const [data, setData] = useState({});

  useEffect(() => {
    getRealTimeInfo()
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err?.response);
      });
  }, []);

  const estimateMonthlySavingsVal = useMemo(() => {
    return estimateMonthlySavings(data?.result?.yieldtotal);
  }, [data]);

  return (
    <Layout siteConfig={{ name: "Index" }}>
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
        <div
          className="w-1/2  sm:w-full xxs:w-full xs:w-full"
          id="welcomeImgSection"
        />
      </Section>
      <AbsoluteDiv height={"md"} />
      <Section title={"How to save"} bgColor={"lightGrey"}>
        <ClickableCards
          data={[
            {
              number: 1,
              title: "Search",
              subtitle: "Search for your home",
              description:
                "We use Google Earth imagery to analyze your roof shape and local weather patterns to create a personalized solar plan.",
              img: "/assets/img/g1.jpg",
            },
            {
              number: 2,
              title: "Personalize",
              subtitle: "Personalize your solar analysis",
              description:
                "Adjust your electric bill to fine-tune your savings estimate and the recommended number of solar panels for your home.",
              img: "/assets/img/g2.jpg",
            },
            {
              number: 3,
              title: "Select",
              subtitle: "Compare and select finance options",
              description:
                "Choose between our pay-per-use or outright purchase package",
              img: "/assets/img/g3.jpg",
            },
          ]}
        />
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
      <AbsoluteDiv height={"lg"} />
      <Section title={"Your Co-owning Opportunity"} bgColor="lightGrey">
        <ProjectDetails
          imageLink="/assets/img/featureImg.jpeg"
          details="Solar savings are calculated using roof size and shape, shaded roof areas, local weather, local electricity prices, solar costs, and estimated incentives over time. Using a sample address, take a look at the detailed estimate Project Sunroof can give you."
          title="Mandaluyong Project"
          subTitle="Installed on June 24, 2020"
          specsList={[
            {
              content: "5.0 kW",
              label: "System size",
            },
            {
              content: "161.10 kWh",
              label: "Monthly yield",
            },
            {
              content: `₱ ${estimateMonthlySavingsVal}`,
              label: "Estimated Monthly Savings",
            },
            {
              content: "3.51 Mwh",
              label: "Total Yield",
            },
          ]}
          buttonLabel={"Co-Own"}
          buttonClick={() => handleRouting("/coOwn")}
          linkLabel="Check my Property"
          link="/calculate"
        />
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
      <Section type="fluid">
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
      </Section>
      <LogoContainer />
      <Section bgColor="primary" marginStyle="my-0">
        <Cta
          title={"Let’s discover your solar  saving potential!"}
          buttonTitle="Check my property"
          buttonClick={() => handleRouting("/calculate")}
        />
      </Section>
      <Footer />
    </Layout>
  );
};

export default HomePage;
