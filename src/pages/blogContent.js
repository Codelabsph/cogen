import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import BlogBody from "src/components/blogBody";
import Layout from "src/components/layout";
import Section from "src/components/section";
import BlogHeading from "src/components/blogHeading";
import BlogCard from "src/components/blogCard";
import FbIcon2 from "public/assets/fb-icon2.svg";
const BlogContent = () => {
  return (
    <>
      <Layout siteConfig={{ name: "Blog Content" }}>
        <Navbar />
        <BlogHeading title=" Title of Article" description="  Short description or the abstract of the article" />
        <BlogBody subtitle="Sub Title" src="/assets/img/blogBG.png" />
        <Section>
          <div className="w-full flex justify-between">
            <div className="w-1/4">
              <div className="text-2xl">
                <h5 className="font-playfair">Author Name</h5>
                <small className="text-sm">position</small>
              </div>
            </div>
            <div className="w-3/4">
              <p className="text-xl  sm:text-base md:text-lg   lg:text-lg xxs:text-sm">
                How do we make our house sustainable? One is to use solar power
                to reduce our carbon emission. I'm happy to say that, for the
                first month, our carbon dioxide reduction is around 236.5 kg.
                However, solar panels are so expensive. Thanks to CoGen!! They
                offer several options so that sustainable homes that are powered
                by solar energy will become possible and affordable.
              </p>
            </div>
          </div>
        </Section>
        <Section margin="md">
          <div>
            <h1 className="text-lg font-poppins font-semibold mb-6">UP NEXT</h1>
            <div className="flex flex-row space-x-8">
              <BlogCard
                subHeading="Biology"
                title=" The Social Lives of Climate Reports"
                description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd"
                src="/assets/img/blogImg2.png"
              />
              <BlogCard
                subHeading="Biology"
                title=" The Social Lives of Climate Reports"
                description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd"
                src="/assets/img/blogImg2.png"
              />
              <BlogCard
                subHeading="Biology"
                title=" The Social Lives of Climate Reports"
                description="Lorem ipstum ti amet dolor etc tctasfdsdafa sdf asd"
                src="/assets/img/blogImg2.png"
              />
            </div>
          </div>
        </Section>
        <Footer />
      </Layout>
    </>
  );
};

export default BlogContent;
