import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Section from "src/components/section";
import Buttons from "src/components/buttons";
import IconWithText from "src/components/iconWithText";
import ArrowIcon from "public/assets/arrow-icon.svg"
import Logo from "public/assets/logo.svg";
import Hand2Icon from "public/assets/hand2-icon.svg";
import ClockIcon from "public/assets/clock-icon.svg";
import Up2Icon from "public/assets/up2-icon.svg";
import FeedbackCarousel from "src/components/feedbackCarousel";
import FeedbackCarouselItem from "src/components/feedbackCarouselItem";
import LogoContainer from "src/components/logoContainer";
import ColumnCards from "src/components/columnCards";
import Comma from "public/assets/comma.svg";
import BlogWaveSvg from "src/components/blogWaveSvg";
import LineTop from "public/assets/linetop.svg";
import Calendar from "public/assets/calendar-icon.svg";
import Calendar2 from "public/assets/calendar2-icon.svg";
import HouseIcon from "public/assets/house-icon.svg";
import HandDraw from "public/assets/hand-draw.svg";
import Co2Icon from "public/assets/co2-icon.svg";
import SmallCards from "src/components/smallcards";
import WithProgressBar from "src/components/withProgressBar";
import CardPreview from "src/components/cardPreview";
import NextCardPreview from "src/components/NextCardPReview";
const Case = () => {
  return (
    <>
      <Navbar />
      <Section></Section>
      <Section
        extras="Limited offer"
        title="Your Co-owning Opportunity"
        subTitle="Our co-ownership program is your best option. Own a portion of the system and get your monthly returns from the generated earnings for the next five years. "
        flexRow="between"
      >
        <IconWithText
          icon={<Hand2Icon />}
          title="Php 20,000"
          paragraph="Minimum investment"
        />
        <IconWithText
          icon={<Up2Icon />}
          title="Php 20,000"
          paragraph="Minimum investment"
        />
        <IconWithText
          icon={<ClockIcon />}
          title="Php 20,000"
          paragraph="Minimum investment"
        />
      </Section>

      <Section
        title="Overview"
        subTitle="Our co-ownership program is for those who are looking for an alternative investment and want to support the clean energy transition.
            to clean energy. You can help accelerate the energy transition by helping our fellow Filipinos have solar installations on their properties.  Earn a monthly return from the production of the co-generated system while helping our fellow Filipinos and the environment by co-owning now."
      ></Section>

      <Section title="How the Co-ownership Program  works">
        <div class="flex justify-center space-x-16 xxs:space-x-0 xxs:flex-col py-10">
          <SmallCards
            path={"assets/img/card-1.png"}
            title={"Search"}
            content={
              "Choose one of our projects and the number of slots that you want to invest in. "
            }
          />
          <SmallCards
            path={"assets/img/card-2.png"}
            title={"Co-own"}
            content={
              "Read the terms and agreement and pay the one-time investment amount.  "
            }
          />
          <SmallCards
            path={"assets/img/card-3.png"}
            title={"Earn"}
            content={
              "Start getting your monthly returns on the following month over the next five years."
            }
          />
        </div>
      </Section>

      <Section title="Realtime Data" bgColor="lightGray" padding="md">
        <div className="w-full">
          <WithProgressBar />
          <div className="flex w-full space-x-6 justify-between xxs:flex-col xxs:space-x-0">
            <IconWithText
              icon={<Calendar />}
              textColor="primary"
              weight="bold"
              extras="Daily Yield"
              paragraph="20.40kWh"
            />
            <IconWithText
              icon={<Calendar2 />}
              textColor="primary"
              weight="bold"
              extras="Monthly Yield"
              paragraph="181.50kWh"
            />
            <IconWithText
              icon={<HouseIcon />}
              textColor="primary"
              weight="bold"
              extras="Total Yield"
              paragraph="3.53MWh"
            />
            <IconWithText
              icon={<HandDraw />}
              textColor="primary"
              weight="bold"
              extras="Income Saved"
              paragraph="$148.94"
            />
            <IconWithText
              icon={<Co2Icon />}
              textColor="primary"
              weight="bold"
              extras="Co2 Reduction"
              paragraph="3.52t"
            />

          </div>
        </div>
      </Section>
      <Section>
        <>
          <CardPreview />

        </>
      </Section>
      <Section>
        <>
          <NextCardPreview />

        </>
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
        <div className="h-97 w-full flex justify-center flex-col items-center text-center space-y-8">
          <h1 className="text-7xl z-50 font-bold font-playfair tracking-widest  text-white sm:text-base md:text-2xl lg:text-7xl xxs:text-3xl">
            Let’s discover your solar <br /> saving potential!
          </h1>
          <Buttons
            text={"Check my property"}
            id={"Checkproperty"}
            paddingY={"xs"}
            btnColor={"white"}
            textColor={"primary"}
            width={"lg"}
            border="xs"
          />
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Case;
