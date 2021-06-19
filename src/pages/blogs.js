import React, { useEffect } from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Cta from "src/components/cta";
import Layout from "src/components/layout";
import Section from "src/components/section";

import BlogCard from "src/components/blogCard";
import BlogHero from "src/components/blogHero";
import { getBlogs } from "src/helpers/api.service";
import { getImageUrl } from "src/helpers/utils.service";

const BlogPage = ({ data }) => {
  return (
    <Layout siteConfig={{ name: "Blogs" }}>
      <Navbar />
      <BlogHero
        subHeading="start investing"
        title={data?.[0]?.title}
        description={data?.[0]?.description}
        {...data?.[0]}
      />
      <Section>
        <div>
          <div class="grid grid-cols-3 gap-4 mx-auto xxs:grid-cols-1">
            {data?.map((val, idx) => {
              if (idx === 0) return null;
              else
                return (
                  <BlogCard
                    subHeading={val?.tag}
                    title={val?.title}
                    description={val?.description}
                    src={getImageUrl(val?.cover?.formats?.thumbnail?.url)}
                    {...val}
                  />
                );
            })}
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
  );
};

BlogPage.getInitialProps = async (ctx) => {
  try {
    const response = await getBlogs({ _sort: "updated_at:DESC" });
    return { data: response?.data || [] };
  } catch {
    return { data: false };
  }
};

export default BlogPage;
