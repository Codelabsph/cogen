import React from "react";
import Section from "src/components/section";
import ContactUsWaveSvg from "src/components/contactusWaveSvg";
import ContactUsForm from "src/components/contactUsForm";

const ContactUs = ({}) => {
  return (
    <Section sectionType={"fluid"} wave={<ContactUsWaveSvg />}>
      <ContactUsForm />
      <div className="w-1/2 lg:w-1/2 pb-24 xs:text-center  md:w-full xxs:w-full sm:w-full">
        <div className="pt-32 xxs:pt-0"></div>
        <div className=" flex justify-center pt-80 xxs:pt-16 xs:pt-16">
          <div className="w-4/6 xxs:w-full xxs:px-12">
            <h1 className=" z-50 text-4xl font-bold font-playfair tracking-widest  xs:text-text-2xl md:text-2xl lg:text-5xl xxs:text-3xl">
              For other concerns and inquiries
              <span className="font-normal font-poppins block text-lg pt-12 tracking-normal xxs:text-center xs:text-center xxs:py-12">
                Don’t hesitate to reach out to us at
                <br />
                <span className="text-cogengreen font-bold">
                  {" "}
                  hello@cogen.energy
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
