import React from "react";

const FeedbackCarouselItem = ({status, name, position, icon, feedback, carouselId}) => {
  return (
      <>
        <input
          class="carousel-open"
          type="radio"
          id={carouselId}
          name="carousel"
          aria-hidden="true"
          hidden="true"
          checked={status}
        />
        <div class="carousel-item absolute opacity-0">
          <div class="block h-full w-full bg-white text-black text-5xl ">
            <div class=" flex w-full px-16 justify-center items-center h-96">
              <div class="relative">
                <div class="flex justify-center xxs:flex-col">
                  <div class="text-2xl pr-28">
                    <h5 class="font-playfair">{name}</h5>
                    <small class="text-sm">{position}</small>
                  </div>
                  <div class="pr-6">
                 {icon}
                  </div>
                  <div class="w-3/5 xxs:w-full">
                    <p class="text-2xl xxs:text-xs text-justify ">
                    {feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default FeedbackCarouselItem;
