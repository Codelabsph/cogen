import React from "react";
import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import Cta from "src/components/cta";
import Layout from "src/components/layout";
import Section from "src/components/section";
import ArrowIcon from "public/assets/arrow-icon.svg";
import BlogCard from "src/components/blogCard";
const BlogContent = () => {
  return (
    <>
      <Layout siteConfig={{ name: "Blog Content" }}>
        <Navbar />
        <section
          id="blogSection"
          className="w-full bg-center bg-no-repeat bg-cover"
        >
          <div className="w-full  px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-56 h-screen xxl:vh-20 bg-opacity-10 bg-black flex items-center">
            <div className="bg-white py-12 w-10/12 pl-10  xxs:mx-10 absolute bottom-0 right-0  xxs:px-12 flex flex-start">
              <div className="float-left">
                <h5 className="text-gray-400 text-sm font-poppins tracking-widest font-semibold uppercase mb-6 sm:text-sm md:text-lg lg:text-sm xs:text-lg xxs:text-3xl">
                  Start Investing
                </h5>
                <h1 className="text-6xl mb-4 font-playfair leading-normal sm:text-base md:text-6xl lg:text-6xl xxs:text-3xl font-bold">
                  Title of Article
                </h1>
                <p className="text-xl my-6  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-semibold">
                  Short description or the abstract of the article Short
                  description or the abstract of the article Short description
                  or the abstract of the article Short description or the
                  abstract of the article
                </p>
                <p className="text-xl my-6  sm:text-base md:text-lg   lg:text-lg xxs:text-sm  font-semibold">
                  <div>
                    <div className="flex items-center space-x-1 font-bold">
                      <a className="text-cogengreen cursor-pointer">
                        Read More
                      </a>
                      <div>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Section>
            <div className="flex flex-col">
          <div className="w-full flex justify-between bg-red-50">
            <div className="">
              <p>Date - Author</p>
            </div>
            <div className="">
              <svg
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.35749 2.98875H9.00074V0.12675C8.71724 0.08775 7.74225 0 6.60675 0C4.2375 0 2.6145 1.49025 2.6145 4.22925V6.75H0V9.9495H2.6145V18H5.82V9.95025H8.32874L8.72699 6.75075H5.81925V4.5465C5.82 3.62175 6.069 2.98875 7.35749 2.98875Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
          <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </div>
          <div>
              <h1 className=" z-50 mt-20 font-bold font-playfair  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">Sub Title</h1>
              <div classNameimgContainer>
              <img
      class="w-full"
      class="object-fit"
      src="/assets/img/blogBG.png"
      alt="Mountain"
    />
              </div>
          </div>
          <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </div>
          <div className="w-full flex mx-auto justify-center  bg-red-50 space-x-4">
            <div className="">
              <p>Date - Author</p>
            </div>
            <div className="">
              <svg
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.35749 2.98875H9.00074V0.12675C8.71724 0.08775 7.74225 0 6.60675 0C4.2375 0 2.6145 1.49025 2.6145 4.22925V6.75H0V9.9495H2.6145V18H5.82V9.95025H8.32874L8.72699 6.75075H5.81925V4.5465C5.82 3.62175 6.069 2.98875 7.35749 2.98875Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
          </div>
        </Section>

        <Footer />
      </Layout>
    </>
  );
};

export default BlogContent;
