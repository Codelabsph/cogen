import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Hero from "src/components/hero";
import Cta from "src/components/cta";
import LogoClouds from "src/components/section_logoClouds";
import SectionTestimonials from "src/components/section_testimonials";
import SectionWorks from "src/components/section_works";
import SectionJfy from "src/components/section_jfy";
import SectionFeatureOne from "src/components/section_featureOne";
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
import ContactForm from "src/components/contactUs";
const ContactUs = () => {
  return (
    <>
      <Navbar />
    <ContactForm/>
      <Footer />
    </>
  );
};

export default ContactUs;
