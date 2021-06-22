import React from "react";
import FbIcon2 from "public/assets/fb-icon2.svg";
import BlogSubHeading from "src/components/blogSubHeading";
import { formatDate, fbShareLink } from "src/helpers/utils.service";
import ReactMarkdown from "react-markdown";

const BlogBody = ({ ...props }) => {
  return (
    <div className="flex justify-end my-20">
      <div className="flex flex-col w-10/12 px-20 ">
        <BlogSubHeading
          date={formatDate(props?.published_at)}
          author={props?.author?.name}
        />
        {props?.content && <ReactMarkdown children={props?.content} />}
        <div className="w-full flex mx-auto justify-center space-x-4">
          <div className="flex space-x-4 items-center">
            <FbIcon2 />
            <a className="text-gray-500 font-bold text-lg" href={fbShareLink()}>
              Share
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
