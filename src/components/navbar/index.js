import React from "react";
import MenuIcon from "public/assets/menu-icon.svg";
import NavbarIcon from "public/assets/navbar-icon.svg";
const Navbar = () => {
  return (
    <nav class="bg-white font-manrope fixed w-full shadow-lg toTop top-0">
      <div class="w-full mx-auto  sm:px-8 lg:px-16 xl:px-40 2xl:px-56 ">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start xxs:items-start">
            <div class="flex-shrink-1 flex items-center">
              <a href="#" class="mb-2">
                <NavbarIcon/>
              </a>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4 font-extrabold">
                <a
                  href="#"
                  class="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm"
                >
                  Home
                </a>
                <a
                  href="#"
                  class="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm"
                >
                 Co-own
                </a>
               
              </div>
            </div>
          </div>
          <div class="space-x-4 xxs:hidden">
            <a
              href="#"
              class="text-primary  border-b-2 border-transparent hover:bg-secondary  rounded-md  px-5 py-2  text-sm font-medium"
            >
              Get Started
          </a>
            <button class="bg-primary text-white px-5 py-2  text-sm font-medium rounded-md  hover:bg-secondary hover:text-primary" >
            Calculate
            </button>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1  font-extrabold">
          <a
            href="#"
            class="text-gray-900  border-b-2 border-transparent hover:border-primary block  px-3 py-2  text-sm"
          >
            Home
        </a>
          <a
            href="/map"
            class="text-gray-900  border-b-2 border-transparent hover:border-primary block px-3 py-2  text-sm"
          >
            Co-own
        </a>
      <div class="space-x-4">
            <a
              href="#"
              class="text-primary  border-b-2 border-transparent hover:bg-secondary  rounded-md  px-5 py-2  text-sm font-medium"
            >
                Get Started 
          </a>
            <button class="bg-primary text-white px-5 py-2  text-sm font-medium rounded-md  hover:bg-secondary hover:text-primary" >
            Calculate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
