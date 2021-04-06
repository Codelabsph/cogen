import React from "react";

const Cta = () => {
  return (
    <>
      <section class="w-full pb-40 pt-16 bg-cogengreen  text-center">
        <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 z-20 font-manrope">
          <h2 class="text-5xl font-extrabold text-white sm:text-5xl">
          Let’s discover your solar <br/><br/><span class="">saving potential!</span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md">
              <button
                type="button"
                class="py-5 px-12  bg-white hover:bg-secondary hover:text-primary  text-cogengreen w-full transition ease-in duration-200 text-center text-2xl font-bold  rounded-lg">
               Check my property
              </button>     
            </div>
          </div>
        </div> 
      </section>
    </>
  );
};
export default Cta;
