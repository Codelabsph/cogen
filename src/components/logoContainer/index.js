import React from "react";
const LogoContainer = ({ img }) => {
  return (
    <section
      id="section"
      className="max-w-full px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20"
    >
      <svg viewBox="0 0 1110 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1110 1H0V0H1110V1Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="1110"
            y2="1.00857"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C0CCDA" stop-opacity="0.1" />
            <stop offset="0.503785" stop-color="#C0CCDA" stop-opacity="0.6" />
            <stop offset="1" stop-color="#C0CCDA" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex justify-center  items-center vh-25 ">
        <img className="" src="../assets/img/solarenergy.png"></img>
      </div>
      <svg viewBox="0 0 1110 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1110 1H0V0H1110V1Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="1110"
            y2="1.00857"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#C0CCDA" stop-opacity="0.1" />
            <stop offset="0.503785" stop-color="#C0CCDA" stop-opacity="0.6" />
            <stop offset="1" stop-color="#C0CCDA" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default LogoContainer;
