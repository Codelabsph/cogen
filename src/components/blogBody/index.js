import React from "react";
import BlogParagraph from "src/components/blogParagraph";
import FbIcon2 from "public/assets/fb-icon2.svg";
import BlogSubHeading from "src/components/blogSubHeading";
const BlogBody = ({subtitle, src}) => {
   
  return (
    <div className="flex justify-end my-20">
    <div className="flex flex-col w-10/12 px-20 ">
      <BlogSubHeading date="Date" author="author"/>
      <BlogParagraph paragraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.' />
      <div>
        <h1 className=" z-50 my-16 font-bold font-playfair  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
         {subtitle}
        </h1>
        <div classNameimgContainer>
          <img
            class="w-full"
            class="object-fit"
            src={src}
            alt="Mountain"
          />
        </div>
      </div>
      <div className="my-4">
        <BlogParagraph paragraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' />
        <BlogParagraph paragraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' />
      </div>
      <div className="w-full flex mx-auto justify-center space-x-4">
        <div className="flex space-x-4 items-center">
          <FbIcon2 />
          <a className="text-gray-500 font-bold text-lg" href="">
            Share
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlogBody;
