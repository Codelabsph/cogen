import React from "react";

const FullCard = ({ title, paragraph, icon, explore }) => {
  return (
    <div class="relative w-full border-gray-200 rounded-xl border-2 p-16 mx-auto shadow-lg overflow-hidden">
      <div className="z-50 absolute top-0 right-0">
        <svg
          width="741"
          height="103"
          viewBox="0 0 741 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M394.429 55.0803C326.362 31.6813 232.559 65.067 158.217 46.5495C119.537 36.9148 99.2883 2.77001 88.0225 -7.32079C81.8494 -12.85 72.4236 -17.8263 57.1135 -21.6967C41.8035 -25.5672 2.96788e-06 -23.8294 2.96788e-06 -23.8294L0 -47.9999L800 -48L800 102.908L620.984 102.908C620.984 102.908 495.45 104.843 454.596 90.9806C418.941 78.8824 429.273 67.0583 394.429 55.0803Z"
            fill="#22C680"
          />
        </svg>
      </div>
      <div className="z-0 absolute top-0 right-0">
        <svg
          width="758"
          height="132"
          viewBox="0 0 758 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M394.429 74.0661C326.362 50.6703 232.559 78.0097 158.217 59.4947C119.537 49.8613 111.693 41.1684 83.9369 26.7979C66.1337 17.5805 64.4368 15.9759 47.5395 9.38326C30.6421 2.79063 5.25143e-06 -4.83274 5.25143e-06 -4.83274L0 -28.9999L800 -29L800 131.996L609.099 131.996C609.099 131.996 507.138 132.756 458.31 112.805C428.613 100.67 429.273 86.0425 394.429 74.0661Z"
            fill="#C3E7CD"
          />
        </svg>
      </div>
      <div className=" font-poppins content xxs:mt-24  ">
        <h1 className="text-4xl font-bold font-playfair mb-6 xxs:text-2xl">
          No property?
        </h1>
        <p className="text-2xl xxs:text-lg">
          You don't need to have your own solar rooftop installation to join the
          energy transition.
          <br /> Help the environment while earning money through{" "}
          <span>
            <a class="text-cogengreen font-semibold" href="">
              our co-ownership program
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default FullCard;
