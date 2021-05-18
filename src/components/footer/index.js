import React from "react";
import FooterIcon from "public/assets/footer-icon.svg";
import FbIcon from "public/assets/fb-icon.svg";
import LinkIcon from "public/assets/link-icon.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-black w-full mx-auto sm:px-8 lg:px-16 xl:px-40 2xl:px-56">
        <div className=" text-gray-800 py-10 flex flex-wrap justify-left xxs:flex-col">
          <div className="py-5 w-1/2 sm:w-4/12 md:w-1/4 xxs:w-full">
            <FooterIcon />
            <div
              href="#"
              className="mt-10 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Copyright © 2020 Landify UI Kit.
            </div>
            <div
              href="#"
              className="mt-2 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              All rights reserved
            </div>

            <div className="flex items-center mt-6 space-x-3">
              <FbIcon />
              <LinkIcon />
            </div>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full">
            <div className=" text-white text-xl mb-6 font-bold font-poppins">
              Home
            </div>

            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700"
            >
              Who we are
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700"
            >
              How to save
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700"
            >
              Just for You
            </a>
            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700"
            >
              Property
            </a>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-2/12 xxs:w-full">
            <div className=" uppercase text-white text-xl mb-6 font-bold">
              Co-own
            </div>

            <a
              href="#"
              className="my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700"
            >
              Overview
            </a>
            <a
              href="#"
              className="my-3 block text-primary  hover:text-gray-300 text-sm font-medium duration-700 "
            >
              Get Started
            </a>
          </div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full"></div>
          <div className="p-5 w-1/2 sm:w-4/12 md:w-1/5 xxs:w-full">
            <div className=" uppercase text-white mb-6 font-bold">
              Stay up to date
            </div>

            <div className="rounded-md  my-6">
              <input
                type="text"
                name="email"
                id="email"
                className="font-manrope text-white block w-full bg-gray-700 px-3 py-2 rounded-md sm:text-sm focus:outline-none "
                placeholder="Your  email address"
              ></input>
            </div>
            <div>
              <a
                href="#"
                className="my-3 block text-gray-300 hover:text-gray-300 text-sm font-medium duration-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
