import React from "react";
import SendIcon from "public/assets/send-icon.svg"
const InputWithButton = ({ placeholder }) => {
  return (
    <form method="#">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <input type="search" name="q" class="py-2 text-sm text-white bg-gray-800 rounded-md pl-10 w-full  focus:outline-none focus:bg-gray-500 focus:text-gray-900" placeholder={placeholder} autocomplete="off"/>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 ">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
            <SendIcon/>
        </button>
      </span>
    </div>
  </form>
  );
};

export default InputWithButton;
