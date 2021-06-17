import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Cta from "src/components/cta";
import Layout from "src/components/layout";
import Section from "src/components/section";
import ArrowIcon from "public/assets/arrow-icon.svg";
import BlogCard from "src/components/blogCard";
import BlogHero from "src/components/blogHero"
const BlogPage = () => {
  return (
    <>
      <Layout siteConfig={{ name: "Contact Us" }}>
        <Navbar />
       <BlogHero subheading="start investing" title="Title of the Article" description="Short description or the abstract of the article"/>
        <Section>
        <div>
          <div class="grid grid-cols-3 gap-4 mx-auto xxs:grid-cols-1">
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
           <BlogCard subHeading="Biology" title=" The Social Lives of Climate Reports" description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd" src="/assets/img/blogImg2.png" />
          </div>
      
          </div>
        </Section>

    
        <Section bgColor="primary" marginStyle="my-0">
          <Cta
            title={"Let’s discover your solar  saving potential!"}
            buttonTitle="Check my property"
            buttonClick={() => handleRouting("/calculate")}
          />
        </Section>
        <Footer />
      </Layout>
    </>
  );
};

export default BlogPage;
