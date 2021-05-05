import React from "react";

const SectionTestimonials = () => {
  return (
    <>
      <section className="w-full pb-10 pt-10 bg-white font-manrope">
        <div className="container m-auto text-grey-darkest">
          <div className="mb-8 p-4 w-full flex flex-wrap ">
            <div className="flex items-center space-x-3 w-full md:w-1/2 lg:w-1/4 capitalize  md:mb-10 sm:mb-10 lg:mb-10 xs:mb-10 mt-14">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="/images/person/1.jpg"
                  className="mx-auto object-cover rounded-full h-20 w-20 bg-black"
                />
              </a>
              <span className="font-bold text-lg">
                Jenny Wilson
                <br />
                <span
                  className="text-gray-400 font-normal text-smnt
                                "
                >
                  Vice President
                </span>
              </span>
            </div>
            <div className="flex w-full md:w-1/2 lg:w-3/4 text-justify ">
              <span className="">
                <svg
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.584 1.16C20.272 0.631999 17.812 1.256 16.204 3.032C14.596 4.808 13.792 7.424 13.792 10.88V20.672H23.584V10.88H18.544C18.28 9.152 18.52 7.748 19.264 6.668C20.032 5.588 21.28 5.12 23.008 5.264L23.584 1.16ZM10.552 1.16C7.24 0.631999 4.78 1.256 3.172 3.032C1.564 4.808 0.76 7.424 0.76 10.88V20.672H10.552V10.88H5.512C5.248 9.152 5.488 7.748 6.232 6.668C7 5.588 8.248 5.12 9.976 5.264L10.552 1.16Z"
                    fill="#22C680"
                  />
                </svg>
              </span>
              <p className="text-2xl mx-5">
                We had an incredible experience working with Landify and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next
                level and get more eyes on our product.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionTestimonials;
