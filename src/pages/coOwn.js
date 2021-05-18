import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import CoOwn from "src/components/pages/coOwn";
import Layout from "src/components/layout";

const CoOwnPage = () => {
  return (
    <Layout siteConfig={{ name: "CoOwn" }}>
      <Navbar />
      <CoOwn />
      <Footer />
    </Layout>
  );
};

export default CoOwnPage;
