import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Layout from "src/components/layout";
import ContactUs from "src/components/contactUs";

const ContactUsPage = ({}) => {
  return (
    <Layout siteConfig={{ name: "Contact Us" }}>
      <Navbar />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default ContactUsPage;
