import React from "react";

const Section = ({ title, subTitle, children, margin, padding, bgColor, flexRow,  flexSpacing, marginTop, sectionType,wave}) => {

  const marginStyle =  margin === "lg"   ? "my-24"   : margin === "md"    ? "my-16"   : margin === "s"  ? "my-5" : margin === "xl"  ? "my-32": "my-0";
  const TopMargin = marginTop === "xs" ? "mt-6" : marginTop === "sm" ? "mt-12" : marginTop === "lg" ? "mt-16" :  marginTop === "xl" ? "mt-24" :  marginTop === "xxl" ? "mt-32" : "";
  const paddingStyle = padding === "lg"  ? "py-24" : padding === "md" ? "py-16": padding === "s" ? "py-5" : "py-0";
  const flexRows = flexRow === "around" ? "justify-around" : flexRow === "center" ? "justify-center" : flexRow === "between"  ? "justify-between" : ""; 
  const spacing = flexSpacing === "xs" ? "space-x-4 xxs:space-x-0" : flexSpacing === "sm" ? "space-x-6 xxs:space-x-0" : flexSpacing === "md"  ? "space-x-8 xxs:space-x-0" : "lg" ? "space-x-12 xxs:space-x-0" : ""; 
  const bgStyle = bgColor === "primary" ? "bg-cogengreen" : bgColor === "white" ? "bg-white" : bgColor === "light-green" ?  "bg-green-300" : "";

  
if(sectionType == "fluid")
  return (
    <section id="section" className="max-full mx-auto overflow-x-hidden">
      {wave}
      <div className="flex md:flex-row sm:flex-col align-center xxs:flex-col-reverse font-poppins xxs:text-center  ">
      {React.Children.map(children, (child) => (
          <>{React.cloneElement(child)}</>
        ))}
      </div>
    </section>
  );
  else 
  return (
    <section
      id="section"
      className={`w-full mx-auto px-6 sm:px-8 lg:px-16 xl:px-40 2xl:px-64  ${marginStyle} ${bgStyle} ${paddingStyle} ${TopMargin}`}
    >
       {wave}
      <h1 className="text-7xl font-bold font-playfair tracking-widest  sm:text-base md:text-2xl lg:text-6xl xxs:text-3xl">
        {title && title}
      </h1>
      <p className="text-lg font-poppins my-8">{subTitle && subTitle}</p>
      <div className={`flex align-center  md:flex-row sm:flex-col xxs:flex-col lg:-mx-8 my-8  font-poppins ${flexRows} ${spacing} xxs:text-center` }>
        
        {React.Children.map(children, (child) => (
          <>{React.cloneElement(child)}</>
        ))}
      </div>
    </section>
  );
};

export default Section;
