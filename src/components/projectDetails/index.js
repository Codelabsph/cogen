import React from "react";
import Buttons from "src/components/buttons";
import ArrowIcon from "public/assets/arrow-icon.svg";
import HeadingWithText from "src/components/headingWithText";
import CogenShadeIcon from "public/assets/cogen-shade-icon.svg";
import TextWithHeading from "src/components/textWithHeading";
import { useRouter } from "next/router";

const ProjectDetails = ({
  imageLink,
  details,
  title,
  subTitle,
  specsList,
  cogenShade,
  mainTitle,
  detailsListCol1,
  detailsListCol2,
  buttonClick,
  buttonLabel,
  linkLabel,
  link,
}) => {
  const router = useRouter();

  const handleRouting = (to) => {
    return router.push(to);
  };

  return (
    <>
      <div className=" flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins xxs:text-center">
        <div className="w-1/2 lg:w-1/2 lg:px-8  md:w-full xxs:w-full sm:w-full">
          <div className="z-50 relative">
            <img className="w-full xxs:h-auto" src={imageLink} />
          </div>
        </div>
        <div className=" z-50 relative  w-1/2 lg:w-1/2 md:w-full xxs:w-full sm:w-full lg:px-8">
          {cogenShade && (
            <div className="xxs:py-12">{cogenShade && <CogenShadeIcon />}</div>
          )}
          {mainTitle && <p className="text-lg my-2">{mainTitle}</p>}
          <p className="text-lg py-4">{details}</p>
          {title && (
            <h2 className="text-lg font-bold my-2 ">
              {title}
              <span className="font-normal ml-5 xxs:ml-0">{subTitle}</span>
            </h2>
          )}
          <div className="flex flex-row pt-2 space-x-14 xxs:flex-col xxs:space-x-0">
            <div className="">
              {detailsListCol1?.map((val) => {
                return (
                  <TextWithHeading label={val?.label} content={val?.content} />
                );
              })}
            </div>
            <div className="">
              {detailsListCol2?.map((val) => {
                return (
                  <TextWithHeading label={val?.label} content={val?.content} />
                );
              })}
            </div>
          </div>
          {specsList && (
            <div className="flex flex-row my-2 xxs:flex-col w-full text-center space-x-16 xxs:space-x-0">
              {specsList &&
                specsList.map((val) => {
                  return (
                    <HeadingWithText
                      content={val?.content}
                      label={val?.label}
                    />
                  );
                })}
            </div>
          )}
          {buttonLabel && (
            <div className="my-4">
              <Buttons
                text={"Co-own"}
                id={"coOwn"}
                paddingY={"xs"}
                btnColor={"primary"}
                textColor={"white"}
                width={"xs"}
                onClick={buttonClick && buttonClick}
              />
            </div>
          )}
          {linkLabel && (
            <div>
              <div className="flex items-center space-x-1 font-bold">
                <a
                  onClick={() => handleRouting(link)}
                  className="text-cogengreen cursor-pointer"
                >
                  {linkLabel}
                </a>
                <div>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
