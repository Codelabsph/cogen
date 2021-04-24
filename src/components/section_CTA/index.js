import React from "react";

const Cta = () => {
  return (
    <>
      <section className="w-full bg-cogengreen sm:px-8  py-60">
        <div class="relative w-full">
          <div className="z-50 absolute top-0 right-0">
         
          </div>
          <div className="z-0 absolute top-0 right-0">
          
          </div>
          <div className=" font-poppins content xxs:mt-24  ">
            <h1 className="text-4xl font-bold font-playfair mb-6 xxs:text-2xl">
              No property?
            </h1>
            <p className="text-2xl xxs:text-lg">
              You don't need to have your own solar rooftop installation to join
              the energy transition.
              <br /> Help the environment while earning money through{" "}
              <span>
                <a class="text-cogengreen font-semibold" href="">
                  our co-ownership program
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cta;
