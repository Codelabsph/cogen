import React, { useState, useEffect, useMemo } from "react";
import Section from "src/components/section";
import Buttons from "src/components/buttons";
import IconWithText from "src/components/iconWithText";
import PigIcon from "public/assets/pig-icon.svg";
import SocketIcon from "public/assets/socket-icon.svg";
import SolarIcon from "public/assets/solar-icon.svg";
import CloudsIcon from "public/assets/clouds-icon.svg";
import DieselIcon from "public/assets/cloud-icon.svg";
import PlantIcon from "public/assets/plant-icon.svg";
import HandIcon from "public/assets/hand-icon.svg";
import DiskIcon from "public/assets/disk-icon.svg";
import UpIcon from "public/assets/up-icon.svg";
import Hand2Icon from "public/assets/hand2-icon.svg";
import ClockIcon from "public/assets/clock-icon.svg";
import Up2Icon from "public/assets/up2-icon.svg";
import FeedbackCarousel from "src/components/feedbackCarousel";
import FeedbackCarouselItem from "src/components/feedbackCarouselItem";
import LogoContainer from "src/components/logoContainer";
import ProjectDetails from "src/components/projectDetails";
import Comma from "public/assets/comma.svg";
import BlogWaveSvg from "src/components/blogWaveSvg";
import {
  estimatedAnnualEnergyOuputkWh,
  estimatedAnnualSavingsPeso,
  carbonEmissionSaved,
  equivalentLitersOfDiesel,
  co2Reduction,
  estimateMonthlySavingsFromApi,
} from "src/helpers/calculation.service";
import { useRouter } from "next/router";
import { getRealTimeInfo } from "src/helpers/api.service";


const Personalize = ({ data, area, address }) => {
  const estimatedAnnualEnergyOuputkWhVal = estimatedAnnualEnergyOuputkWh(area);
  const estimated10YearsSavingsPesoVal = estimatedAnnualSavingsPeso(area);
  const carbonEmissionSavedVal = carbonEmissionSaved(area);
  const equivalentLitersOfDieselVal = equivalentLitersOfDiesel(area);

  const router = useRouter();
  const handleRouting = (to) => {
    return router.push(to);
  };

  const [dataApi, setDataApi] = useState({});

  useEffect(() => {
    getRealTimeInfo()
      .then((res) => {
        setDataApi(res?.data);
      })
      .catch((err) => {
        console.log(err?.response);
      });
  }, []);

  const co2ReductionVal = useMemo(() => {
    return co2Reduction(dataApi?.result?.yieldtotal);
  }, [dataApi]);

  const estimateMonthlySavingsFromApiVal = useMemo(() => {
    return estimateMonthlySavingsFromApi(dataApi?.result?.yieldtotal);
  }, [dataApi]);
  return (
    <>
      <Section sectionType={"fluid"} wave={<BlogWaveSvg />}>
        <div className="w-1/2 lg:w-1/2   md:w-full xxs:w-full sm:w-full">
          <div className="flex justify-center  mt-12">
            <div className="w-3/4 xxs:w-full sm:w-full px-8 pt-6 pb-8 mb-4 flex flex-col my-2 ml-56 xxs:ml-0">
              <div className="mt-64 mb-12 xxs:mt-4 ">
                <h1 className="text-7xl font-bold font-playfair  tracking-widest md:text-2xl lg:text-7xl sm:text-3xl xxs:text-3xl mb-4">
                  Hello {data?.first_name},
                </h1>
                <small className="text-xl">
                  Here’s your personalized report!
                </small>
              </div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold font-poppins  tracking-widest  sm:text-base md:text-2xl lg:text-2xl xxs:text-2xl mb-4">
                  {address}
                </h1>
                <small className="text-xl">Address</small>
              </div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold font-poppins  tracking-widest  sm:text-base md:text-2xl lg:text-2xl xxs:text-2xl mb-4">
                  P {data?.estimate_monthly_bill}
                </h1>
                <small className="text-xl">monthly average bill</small>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 lg:w-1/2  md:w-full xxs:w-full sm:w-full">
          <img className="w-full" src="../assets/img/map.png"></img>
        </div>
      </Section>

      <Section flexRow="between">
        <IconWithText
          icon={<PigIcon />}
          title={`P ${estimated10YearsSavingsPesoVal}`}
          paragraph="Estimated savings over 10 years"
        />
        <IconWithText
          icon={<SocketIcon />}
          title={`${estimatedAnnualEnergyOuputkWhVal} kWh`}
          paragraph="Estimated energy ourput for a year"
        />
        <IconWithText
          icon={<SolarIcon />}
          title={`${area} sq feet`}
          paragraph="Available area for solar panels"
        />
      </Section>
      <Section
        title={"Your potential environmental impact"}
        subTitle={
          "Estimated 10 year environmental impact of the recommended solar installation size."
        }
        flexRow="between"
        margin={"lg"}
        padding={"sm"}
      >
        <IconWithText
          icon={<CloudsIcon />}
          title={`${carbonEmissionSavedVal} metric tons`}
          paragraph="co2 not emmited"
        />
        <IconWithText
          icon={<DieselIcon />}
          title={`${equivalentLitersOfDieselVal} liters`}
          paragraph="Diesel saved"
        />
        <IconWithText
          icon={<PlantIcon />}
          title="225.9 seedings"
          paragraph="Grown"
        />
      </Section>

      <Section flexRow={"center"} spacing={"md"}>
        <div className="w-1/2 xxs:w-full" id="blogOffer" />
        <div className="w-1/2 xxs:w-full">
          <h1 className="text-7xl font-playfair font-bold xxs:text-xl">
            Pay upfront, or <br /> co-generate with us at zero upfront cost
          </h1>
          <p className="py-12 text-xl">
            You pay the upfront cost and own the solar rooftop system, or we pay
            the upfront cost and receive monthly payments from you based on
            pay-per-use agreement.
          </p>
          <small className="text-lg block pb-12">
            No property? Looking for better investments?
          </small>
          <a href="#" className="text-lg text-cogengreen font-semibold">
            See CoGen’s limited offering
          </a>
        </div>
      </Section>
      <Section margin={"s"} flexRow="center">
        <div className="w-1/2 xxs:w-full xxs:mb-4">
          <h1 className="text-7xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
            Co-generating
          </h1>
          <IconWithText
            icon={<HandIcon />}
            title="$0"
            paragraph="Upfront cost"
          />
          <IconWithText
            icon={<DiskIcon />}
            title="$10,000"
            paragraph="Annual Maintenance Cost*"
          />
          <IconWithText
            icon={<UpIcon />}
            title="$10,000"
            paragraph="Estimated savings in 20 years"
          />

          <Buttons
            text={"Co-generate"}
            id={"coGenerate"}
            paddingY={"xs"}
            btnColor={"primary"}
            textColor={"white"}
            width={"xs"}
            border="xs"
          />
          <div className="mt-20">
            <small className="text-gray-400 text-lg">
              *The needed repair and replacement are not included in the
              estimation
            </small>
          </div>
        </div>

        <div className="w-1/2 xxs:w-full">
          <h1 className="text-7xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
            Upfront Payment
          </h1>
          <IconWithText
            icon={<HandIcon />}
            title="Php 65,000 / kWp"
            paragraph="Average market price"
          />
          <IconWithText
            icon={<DiskIcon />}
            title="Php 2,500+"
            paragraph="Annual Maintenance Cost*"
          />
          <IconWithText
            icon={<UpIcon />}
            title="$10,000"
            paragraph="Before return on investment"
          />
          <Buttons
            text={"Contact Sales"}
            id={"contactSales"}
            border={"xs"}
            paddingY={"xs"}
            btnColor={"transparent"}
            textColor={"primary"}
            width={"xs"}
          />
        </div>
      </Section>
      <Section bgColor={"light-green"} padding={"lg"} flexRow={"center"}>
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
          <div className="ml-12 mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-2"></div>
            <div className=" mt-2 mr-16">
              <h2 className="text-cogengreen text-5xl font-playfair font-bold">
                Limited Offer
              </h2>
            </div>
          </div>
          <div className="my-6 text-green-300 border border-green-300"> </div>
          <div className="p-12">
            <div>
              <h1 className="text-4xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-xl xxs:text-justify">
                No property? Looking for better investments?
              </h1>

              <p className="pt-8 text-xl ">
                Our co-ownership program is your best option. Own a portion of
                the system and get your monthly returns from the generated
                earnings for the next five years.{" "}
              </p>
              <div className="flex justify-between mt-12 xxs:flex-col">
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
              </div>
              <Buttons
                text={"Co-own"}
                paddingY={"xs"}
                btnColor={"primary"}
                textColor={"white"}
                width={"xs"}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        margin={"xs"}
        marginTop={"lg"}
        title={"Your Co-owning Opportunity"}
        isFlexCol={false}
      >
        <ProjectDetails
          imageLink="/assets/img/featureImg.jpeg"
          details="Solar savings are calculated using roof size and shape, shaded roof areas, local weather, local electricity prices, solar costs, and estimated incentives over time. Using a sample address, take a look at the detailed estimate our solar calculator can give you."
          title="Mandaluyong Project"
          subTitle="Installed on June 24, 2020"
          sectionType={"fluid"}
          specsList={[
            {
              content: `${dataApi?.result?.yieldtotal || 0} MWh`,
              label: "Total yield",
            },
            {
              content: `${dataApi?.result?.yieldtoday || 0} KWh`,
              label: "Yield Today",
            },
            {
              content: `P ${estimateMonthlySavingsFromApiVal}`,
              label: "Monthly savings",
            },
            {
              content: `${co2ReductionVal}t`,
              label: "CO2 Reduction",
            },
          ]}
          buttonLabel={"Co-Own"}
          buttonClick={() => handleRouting("/coOwn")}
          linkLabel="Check my Property"
          link="/calculate"
        />
      </Section>
      <Section>
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
    </>
  );
};

export default Personalize;
