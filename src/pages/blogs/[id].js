import React, { useEffect } from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import BlogBody from "src/components/blogBody";
import Layout from "src/components/layout";
import Section from "src/components/section";
import BlogHeading from "src/components/blogHeading";
import BlogCard from "src/components/blogCard";
import FbIcon2 from "public/assets/fb-icon2.svg";
import { getBlog, getBlogs } from "src/helpers/api.service";
import { useRouter } from "next/router";
import { getImageUrl } from "src/helpers/utils.service";

const BlogContent = ({ data, blogData }) => {
  const router = useRouter();
  useEffect(() => {
    if (!data) {
      router.push({
        pathname: "/404",
        query: { prevLink: `blogs/${router?.query?.id}` },
      });
    }
  }, []);

  return (
    <>
      <Layout siteConfig={{ name: data?.title }}>
        <Navbar />
        <BlogHeading
          title={data?.title}
          description={data?.description}
          {...data}
        />
        <BlogBody {...data} />
        {data?.author && (
          <Section>
            <div className="w-full flex justify-between">
              <div className="w-1/4">
                <div className="text-2xl">
                  <h5 className="font-playfair">{data?.author?.name}</h5>
                  <small className="text-sm">position</small>
                </div>
              </div>
              <div className="w-3/4">
                <p className="text-xl  sm:text-base md:text-lg   lg:text-lg xxs:text-sm">
                  {data?.author?.content}
                </p>
              </div>
            </div>
          </Section>
        )}
        <Section margin="md">
          <div>
            <h1 className="text-lg font-poppins font-semibold mb-6">UP NEXT</h1>
            <div className="flex flex-row space-x-8">
              {blogData?.map((val) => {
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
        <Footer />
      </Layout>
    </>
  );
};

BlogContent.getInitialProps = async ({ query }) => {
  try {
    const response = await getBlog(query?.id);
    const response2 = await getBlogs({ _sort: "updated_at:DESC", _limit: 3 });
    return { data: response?.data || [], blogData: response2?.data };
  } catch {
    return { data: false };
  }
};

export default BlogContent;
