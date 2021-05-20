import React from "react";
import Input from "src/components/form/input";
import Buttons from "src/components/buttons";

const PersonalizeCard = ({ data, handleOnChange, handleSave }) => {
  return (
    <div className="relative  border-gray-200 rounded-xl pb-36 border-2 p-16 xxs:p-4 mx-auto shadow-lg overflow-hidden w-full    xxs:w-full">
      <div className="xxs:hidden">
        <div className="toBottom absolute bottom-0 right-0">
          <svg
            width="904"
            height="580"
            viewBox="0 0 904 546"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M682.099 206.245C564.389 312.148 402.171 188.394 273.61 272.204C206.72 315.811 193.155 355.16 145.155 420.21C114.367 461.933 111.433 469.197 82.2116 499.039C52.9905 528.881 0 563.389 0 563.389V672.785H1383.47V-55.9827H1053.34C1053.34 -55.9827 877.01 -59.4229 792.571 30.8903C741.214 85.8197 742.356 152.032 682.099 206.245Z"
              fill="#C3E7CD"
            />
          </svg>
        </div>
        <div className="toBottom absolute bottom-0 right-0">
          <svg
            width="886"
            height="522"
            viewBox="0 0 886 522"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M682.099 217.28C564.389 323.183 402.171 172.08 273.61 255.89C206.72 299.497 171.703 454.036 152.22 499.706C141.545 524.732 125.244 547.254 98.7684 564.772C72.2922 582.289 0 574.424 0 574.424V683.82H1383.47V0.812622H1073.89C1073.89 0.812622 856.799 -7.94617 786.148 54.7954C724.49 109.552 742.356 163.067 682.099 217.28Z"
              fill="#22C680"
            />
          </svg>
        </div>
      </div>
      <div className=" font-poppins content xxs:my-10">
        <div className="w-4/5 xxs:w-full">
          <h1 className="toTop text-4xl font-bold font-playfair mb-6 xxs:text-2xl">
            Fine-tune your information to find out how much more you could save.
          </h1>
          <div className="w-4/6 xxs:w-full">
            <div className="toTop flex flex-row mb-2 xxs:flex-col space-x-4 xxs:space-x-0">
              <Input
                marginBottom={"xs"}
                id={"firstname"}
                type={"text"}
                text={"First Name"}
                placeholder={"First Name"}
                value={data?.first_name}
                onChange={handleOnChange}
                name="first_name"
              />
              <Input
                marginBottom={"xs"}
                id={"Lastname"}
                type={"text"}
                text={"Last Name"}
                placeholder={"Last Name"}
                value={data?.last_name}
                onChange={handleOnChange}
                name="last_name"
              />
            </div>
            <div className=" mb-2">
              <Input
                marginBottom={"xs"}
                id={"email"}
                type={"email"}
                text={"email"}
                placeholder={"Email"}
                value={data?.email}
                onChange={handleOnChange}
                name="email"
              />
            </div>
            <div className=" w-1/2 mb-2 xxs:w-full">
              <Input
                marginBottom={"xs"}
                id={"etm"}
                type={"number"}
                text={"etm"}
                placeholder={"Estimated monthtly bill"}
                value={data?.estimate_monthly_bill}
                onChange={handleOnChange}
                name="estimate_monthly_bill"
              />
            </div>
            <Buttons
              text={"Personalize"}
              id={"personalize"}
              paddingY={"xs"}
              btnColor={"primary"}
              textColor={"white"}
              width={"xs"}
              border="xs"
              shadows
              onClick={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizeCard;
