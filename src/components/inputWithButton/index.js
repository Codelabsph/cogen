import React from "react";
import SendIcon from "public/assets/send-icon.svg";

const InputWithButton = ({
  placeholder,
  onChange,
  name,
  autoComplete,
  onClick,
  value,
}) => {
  return (
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <input
        type="search"
        class="py-2 text-sm text-white bg-gray-800 rounded-md pl-2 w-full  focus:outline-none focus:bg-gray-500 focus:text-gray-900"
        autoComplete={autoComplete && autoComplete}
        placeholder={placeholder && placeholder}
        name={name && name}
        onChange={onChange && onChange}
        value={value && value}
      />
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 ">
        <button
          type="button"
          class="p-1 focus:outline-none focus:shadow-outline"
          onClick={onClick && onClick}
        >
          <SendIcon />
        </button>
      </span>
    </div>
  );
};

export default InputWithButton;
