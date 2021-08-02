import React from "react";

const FeedbackCarouselItem = ({
  status,
  name,
  position,
  icon,
  feedback,
  carouselId,
}) => {
  return (
    <>
      <input
        className="carousel-open"
        type="radio"
        id={carouselId}
        name="carousel"
        aria-hidden="true"
        hidden="true"
        checked={status}
      />
      <div className="carousel-item absolute opacity-0">
        <div className="block h-full w-full bg-white text-black text-5xl ">
          <div className=" flex w-full px-16 justify-center items-center h-96">
            <div className="relative">
              <div className="flex justify-center xxs:flex-col">
                <div className="text-2xl pr-28">
                  <h5 className="font-playfair">{name}</h5>
                  <small className="text-sm">{position}</small>
                </div>
                <div className="pr-6">{icon}</div>
                <div className="w-3/5 xxs:w-full">
                  <p className="text-2xl xxs:text-xs text-center ">
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
