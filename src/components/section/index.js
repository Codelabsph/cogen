import React from "react";

const Section = ({ title, subTitle, children, margin, padding, bgColor }) => {
  const marginStyle =
    margin === "lg"
      ? "my-24"
      : margin === "md"
      ? "my-16"
      : margin === "s"
      ? "my-5"
      : "my-0";

  const paddingStyle =
    padding === "lg"
      ? "py-24"
      : padding === "md"
      ? "py-16"
      : padding === "s"
      ? "py-5"
      : "py-0";

  const bgStyle = bgColor === "primary" ? "bg-cogengreen" : "bg-white";

  return (
    <section
      id="section"
      className={`max-w-full px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64  ${marginStyle} ${bgStyle} ${paddingStyle}`}
    >
      <h1 className="text-7xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
        {title}
      </h1>
      <p className="text-lg font-poppins my-8">{subTitle && subTitle}</p>
      <div className="flex md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins xxs:text-center">
        
        {React.Children.map(children, (child) => (
          <>{React.cloneElement(child)}</>
        ))}
      </div>
    </section>
  );
};

export default Section;
