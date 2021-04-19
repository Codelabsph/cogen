import React from "react";
import ArrowRight from "public/assets/arrow-right.svg";
const IconWithTextTwo = ({heading, contentSub, icon }) => {
  return (
    <div class="my-14 flex">
      <div>{icon}</div>
      <div class="ml-8 font-poppins">
        <h4 class="text-xl font-bold">{heading}</h4>
        <p class="my-2 leading-relaxed">{contentSub}</p>
      </div>
    </div>
  );
};

export default IconWithTextTwo;
