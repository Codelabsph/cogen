import React from "react";

const FeedbackCarousel = ({ children }) => {
  return (
    <>
      <div className="carousel relative bg-white">
        <div className="carousel-inner relative overflow-hidden w-full">
          {React.Children.map(children, (child) => (
            <>{React.cloneElement(child)}</>
          ))}

          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                for="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-green-200 hover:text-cogengreen"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                for="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-green-200 hover:text-cogengreen"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                for="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-green-200 hover:text-cogengreen"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default FeedbackCarousel;
