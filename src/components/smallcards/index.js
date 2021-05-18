import React from "react";
const SmallCards = ({ path, title, content }) => {
    return (
        <>
            <div class="rounded overflow-hidden shadow-xl  text-center font-poppins w-3/12 xxs:w-full md:w-full lg:w-3/12">
                <img class="w-full" src={path} alt="computer" />
                <div class="px-6 py-4">
                    <div class="font-bold tracking-widest text-xl mb-2"><a class="hover:text-cogengreen" href="">{title}</a></div>
                    <p class="text-gray-700 text-lg  pb-12 pt-4 ">
                        {content}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SmallCards;
