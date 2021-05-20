import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Calculate from "src/components/pages/calculate";
import Layout from "src/components/layout";
import Buttons from "src/components/buttons";
import Modal from "src/components/modal";
const CalculatePage = () => {
  return (
    <Layout siteConfig={{ name: "Calculate" }}>
      <Navbar />
      <Modal/>  
      <Calculate />
      <Footer />
    </Layout>
  );
};

export default CalculatePage;
