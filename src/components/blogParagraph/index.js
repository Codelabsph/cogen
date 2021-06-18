import React from "react";


const BlogParagraph = ({paragraph}) => {
   
  return (
    <p className="text-justify leading-10 text-xl my-6  sm:text-base md:text-2xl   lg:text-2xl xxs:text-sm">
  {paragraph}
    </p>
  );
};

export default BlogParagraph;
