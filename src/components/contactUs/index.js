import React from "react";

const ContactUs = () => {
  return (
    <>
      <div class="relative xxs:hidden">
        <div class="absolute z-50 right-0">
          <svg
            width="1298"
            height="356"
            viewBox="0 0 1298 356"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M681.869 201.451C564.199 125.985 402.036 233.66 273.518 173.938C206.65 142.864 171.645 32.7415 152.169 0.196997C141.497 -17.6356 125.202 -33.685 98.735 -46.1678C72.2679 -58.6506 9.57191e-06 -53.046 9.57191e-06 -53.046L0 -131L1383 -131L1383 355.703L1073.53 355.703C1073.53 355.703 856.51 361.944 785.883 317.235C724.245 278.217 742.105 240.082 681.869 201.451Z"
              fill="#22C680"
            />
          </svg>
        </div>
        <div class="absolute  z-0 right-0">
          <svg
            width="1316"
            height="413"
            viewBox="0 0 1316 413"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M681.869 226.244C564.199 150.825 402.036 238.956 273.518 179.271C206.65 148.217 193.09 120.195 145.106 73.8699C114.329 44.1569 111.395 38.9842 82.1839 17.7322C52.9726 -3.51985 9.56595e-06 -28.0946 9.56595e-06 -28.0946L0 -106L1383 -106L1383 412.988L1052.98 412.988C1052.98 412.988 876.714 415.438 792.304 351.122C740.964 312.004 742.105 264.851 681.869 226.244Z"
              fill="#C3E7CD"
            />
          </svg>
        </div>
      </div>
      <section id="section" className="max-w-full ">
        <div className="flex  md:flex-row sm:flex-col align-center xxs:flex-col-reverse lg:-mx-8  font-poppins xxs:text-center  ">
          <div className="w-1/2 lg:w-1/2 bg-gray-100  md:w-full xxs:w-full sm:w-full">
            <form>
            <div className="flex justify-center  mt-20">
              <div class="w-3/4 xxs:w-full px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <h3 className="tracking-widest font-semibold my-24 uppercase xxs:my-12">
                  Contact Us
                </h3>
                <h1 className="text-4xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-5xl xxs:text-3xl mb-20">
                  Want to learn more?
                </h1>
                <div class=" flex flex-row mb-6 xxs:flex-col space-x-4 xxs:space-x-0">
                  <div class=" mb-6 md:mb-0 w-full">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                      id="firstName"
                      type="text"
                      placeholder="Jane"
                    />
                  </div>
                  <div class="w-full">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div class=" mb-6 ">
                  <div class=" mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                      id="emial"
                      type="email"
                      placeholder="john.doe@email.com"
                    />
                  </div>
                </div>
                <div class=" mb-6 ">
                  <div class=" mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
                      for="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                      id="phoneNumber"
                      type="text"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div class=" mb-6 ">
                  <div class=" mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      for="grid-state"
                    >
                      How can our sales team help you?
                    </label>
                    <div class="relative">
                      <select
                        id="help"
                        name="help"
                        autocomplete="country"
                        class=" block   w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      >
                        <option disabled selected>Select One</option>
                        <option>I want to co-own a property</option>
                        <option>I want to co-generate in my property</option>
                        <option>I want to buy outright</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class=" mb-6 ">
                  <div class=" mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      for="help"
                    >
                      How can our sales team help you?
                    </label>
                    <div class="relative">
                      <select
                        id="help2"
                        name="help2"
                        autocomplete="help2"
                        class=" block   w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      >
                          <option disabled selected>Select One</option>
                         <option>Word of Mouth</option>
                        <option>Online Search</option>
                        <option>Facebook</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class=" mb-6 ">
                  <div class=" mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
                      for="help3"
                    >
                      What can we help you with?
                    </label>
                    <textarea
                      id="help3"
                      name="help3"
                      rows="6"
                      class=" p-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div class="mt-6  mb-24">
                  <button
                    type="button"
                    id="btnContactUs"
                    className="py-3 bg-cogengreen hover:bg-secondary hover:text-primary  text-white w-36 transition ease-in duration-200 text-lg font-bold  rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            </form>
          </div>
          <div className="w-1/2 lg:w-1/2   md:w-full xxs:w-full sm:w-full">
            <div class="pt-32 xxs:pt-0"></div>
            <div class=" flex justify-center pt-80 xxs:pt-16 xs:pt-16">
              <div class="w-4/6 xxs:w-full xxs:px-12">
              <h1 class=" z-50 text-4xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-5xl xxs:text-3xl">
                For other concerns and inquiries
                <span class="font-normal font-poppins block text-lg pt-12 tracking-normal xxs:text-center xs:text-center xxs:py-12"> 
              Don’t hesitate to reach out to us at<br/><span class="text-cogengreen font-bold"> hello@cogen.energy</span></span>
              </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
