import React from "react";
import Buttons from "src/components/buttons";
import ModalIcon from "public/assets/modal-icon.svg";

const Modal = () => {
  return (
    <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <div class="inline-block  bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="sm:flex sm:items-start bg-white px-4  pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="mx-auto py-4">
            <ModalIcon/>
            <div className="text-left py-4">
            <h1 className="font-extrabold font-poppins">How to draw your system</h1>
            <p className="font-poppins"> 
            Click on each corner of the perimeter of your roof or space that is available for solar system installation.
            </p>
            </div>
            
            <div className="bg-gray-50 px-4 py-3">
            <Buttons
              text={"Start Drawing"}
              id={"Checkproperty"}
              paddingY={"xs"}
              btnColor={"primary"}
              textColor={"white"}
              width={"sm"}
              border="xs"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
