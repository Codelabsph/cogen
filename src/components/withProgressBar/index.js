import React from "react";

const TextWithHeading = () => {
  return (
    <div className="flex w-full space-x-6 justify-between xxs:flex-col xxs:space-x-0">
      <div className="w-3/12 xxs:w-full">
        <select
          id="help2"
          name="help2"
          autoComplete="help2"
          className=" block   w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
        >
          <option disabled selected>
            Select One
          </option>
          <option>Word of Mouth</option>
          <option>Online Search</option>
          <option>Facebook</option>
          <option>Others</option>
        </select>
      </div>

      <div className="w-1/2 xxs:w-full">
        <div className=" flex ">
          <div className="shadow w-full bg-grey-light mt-2 rounded-lg">
            <div className="bg-yellow-400 text-xs leading-none rounded-lg  py-3 text-center text-white w-1/2">
              50%
            </div>
          </div>
        </div>
        <div className="">
          <small>Real Time Power</small>
          <small className="float-right">Real Time Power</small>
        </div>
      </div>
      <div className="py-4">563.00W</div>
      <div className="py-4 flex flex-col">
        <span>
          <strong>1</strong> out of two{" "}
        </span>
        <small>Online Inverters</small>
      </div>
    </div>
  );
};

export default TextWithHeading;
