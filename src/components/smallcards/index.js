import React from "react";
const SmallCards = ({ path, title, content }) => {
  return (
    <div className="rounded overflow-hidden shadow-xl  text-center font-poppins w-3/12 xxs:w-full md:w-full lg:w-3/12">
      <img className="w-full" src={path} alt="computer" />
      <div className="px-6 py-4">
        <div className="font-bold tracking-widest text-xl mb-2">
          <a className="hover:text-cogengreen" href="">
            {title}
          </a>
        </div>
        <p className="text-gray-700 text-lg  pb-12 pt-4 ">{content}</p>
      </div>
    </div>
  );
};

export default SmallCards;
