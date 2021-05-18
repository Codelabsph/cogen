import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Calculate from "src/components/pages/calculate";
import Layout from "src/components/layout";

const CalculatePage = () => {
  return (
    <Layout siteConfig={{ name: "Calculate" }}>
      <Navbar />
      <Calculate />
      <Footer />
    </Layout>
  );
};

export default CalculatePage;
