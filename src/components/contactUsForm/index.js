import React from "react";
import Buttons from "src/components/buttons";
import InputFields from "src/components/inputFields";

const ContactUsForm = ({}) => { 
       
  return (
    <div className="w-1/2 lg:w-1/2 bg-gray-100  md:w-full xxs:w-full sm:w-full">
    <form>
      <div className="flex justify-center  mt-20">
        <div className="w-3/4 xxs:w-full px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <h3 className="text-xl tracking-widest font-semibold my-24 uppercase xxs:my-12">
            Contact Us
        </h3>
          <h1 className="text-4xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-5xl xxs:text-3xl mb-20">
            Want to learn more?
        </h1>
          <div className=" flex flex-row mb-6 xxs:flex-col space-x-4 xxs:space-x-0">
            <InputFields marginBottom={"xs"} id={"firstname"} type={"text"} text={"First Name"} placeholder={"Jane"} />
            <InputFields marginBottom={"xs"} id={"Lastname"} type={"text"} text={"Last Name"} placeholder={"Jane"} />

          </div>
          <div className=" mb-6 ">
            <InputFields marginBottom={"xs"} id={"email"} type={"email"} text={"Email"} placeholder={"JaneDoe@gmail.com"} />
          </div>

          <div className=" mb-6 ">
            <InputFields marginBottom={"xs"} id={"text"} type={"text"} text={"Phone number"} placeholder={"(123) 456-7890"} />
          </div>

          <div className=" mb-6 ">
            <div className=" mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2" for="grid-state">
                How can our sales team help you?
            </label>
              <div className="relative">
                <select
                  id="help"
                  name="help"
                  autocomplete="country"
                  className=" block   w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
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
          <div className=" mb-6 ">
            <div className=" mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
                for="help"
              >
                How can our sales team help you?
            </label>
              <div className="relative">
                <select
                  id="help2"
                  name="help2"
                  autocomplete="help2"
                  className=" block   w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
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
          <div className=" mb-6 ">
            <div className=" mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-semibold mb-2"
                for="help3"
              >
                What can we help you with?
            </label>
              <textarea
                id="help3"
                name="help3"
                rows="6"
                className=" p-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="mt-6  mb-24 xxs:mb-12 xs:mb-12">
            <Buttons text={"Submit"} id={"btnContactUs"} paddingY={'xs'} btnColor={'primary'} textColor={'white'} width={'xs'} border='xs' />
          </div>
        </div>
      </div>
    </form>
  </div>
  );
};

export default ContactUsForm;
