import React from "react";
import FbIcon2 from "public/assets/fb-icon2.svg";
import { fbShareLink } from "src/helpers/utils.service";

const BlogSubHeading = ({ date, author }) => {
  return (
    <div className="w-full flex justify-between">
      <div className="text-lg font-poppins font-semibold tracking-widest">
        <p>
          {date} - {author}
        </p>
      </div>
      <div className="flex space-x-4 items-center">
        <FbIcon2 />
        <a className="text-gray-500 font-bold text-lg" href={fbShareLink()}>
          Share
        </a>
      </div>
    </div>
  );
};

export default BlogSubHeading;
