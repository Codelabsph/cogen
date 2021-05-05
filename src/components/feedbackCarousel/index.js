import React from "react";

const FeedbackCarousel = ({children}) => {
  return (
      <>
    <div class="carousel relative bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">
      {React.Children.map(children, (child) => (
          <>{React.cloneElement(child)}</>
        ))}

        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="carousel-bullet cursor-pointer block text-4xl text-green-200 hover:text-cogengreen"
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="carousel-bullet cursor-pointer block text-4xl text-green-200 hover:text-cogengreen"
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="carousel-bullet cursor-pointer block text-4xl text-green-200 hover:text-cogengreen"
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
