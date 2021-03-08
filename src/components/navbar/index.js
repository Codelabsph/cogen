import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-white font-manrope">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
            <a href="#" class="mb-2">
              <svg width="105" height="27" viewBox="0 0 105 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.575195 28.0001H10.0683C14.5698 28.0001 18.219 24.3509 18.219 19.8494H8.72588C4.22438 19.8494 0.575195 23.4986 0.575195 28.0001Z" fill="#F22BB2"/>
                <path d="M1 8.15069V20.137C5.5015 20.137 9.15069 16.4878 9.15069 11.9863V0C4.64919 0 1 3.64919 1 8.15069Z" fill="#22C680"/>
                <path d="M27.4251 0H17.9319C13.4304 0 9.78125 3.64919 9.78125 8.15068H19.2744C23.7759 8.15068 27.4251 4.5015 27.4251 0Z" fill="#FE9A22"/>
                <path d="M27.4251 19.3698V7.38354C22.9236 7.38354 19.2744 11.0327 19.2744 15.5342V27.5205C23.7759 27.5205 27.4251 23.8713 27.4251 19.3698Z" fill="#2EC5CE"/>
                <path d="M40.4002 17.92V7.00002H37.2002V21H45.4002V17.92H40.4002Z" fill="#0B0D17"/>
                <path d="M53.8719 11V11.94C53.2119 11.18 52.2319 10.72 50.8919 10.72C48.2719 10.72 46.1119 13.02 46.1119 16C46.1119 18.98 48.2719 21.28 50.8919 21.28C52.2319 21.28 53.2119 20.82 53.8719 20.06V21H56.8719V11H53.8719ZM51.4919 18.44C50.1119 18.44 49.1119 17.5 49.1119 16C49.1119 14.5 50.1119 13.56 51.4919 13.56C52.8719 13.56 53.8719 14.5 53.8719 16C53.8719 17.5 52.8719 18.44 51.4919 18.44Z" fill="#0B0D17"/>
                <path d="M64.9329 10.72C63.6129 10.72 62.6129 11.2 62.0729 11.94V11H59.0729V21H62.0729V15.54C62.0729 14.12 62.8329 13.48 63.9329 13.48C64.8929 13.48 65.6729 14.06 65.6729 15.3V21H68.6729V14.86C68.6729 12.16 66.9529 10.72 64.9329 10.72Z" fill="#0B0D17"/>
                <path d="M77.993 7.00002V11.94C77.333 11.18 76.353 10.72 75.013 10.72C72.393 10.72 70.233 13.02 70.233 16C70.233 18.98 72.393 21.28 75.013 21.28C76.353 21.28 77.333 20.82 77.993 20.06V21H80.993V7.00002H77.993ZM75.613 18.44C74.233 18.44 73.233 17.5 73.233 16C73.233 14.5 74.233 13.56 75.613 13.56C76.993 13.56 77.993 14.5 77.993 16C77.993 17.5 76.993 18.44 75.613 18.44Z" fill="#0B0D17"/>
                <path d="M84.6939 10.12C85.6739 10.12 86.4939 9.30002 86.4939 8.32002C86.4939 7.34002 85.6739 6.52002 84.6939 6.52002C83.7139 6.52002 82.8939 7.34002 82.8939 8.32002C82.8939 9.30002 83.7139 10.12 84.6939 10.12ZM83.1939 21H86.1939V11H83.1939V21Z" fill="#0B0D17"/>
                <path d="M93.8893 9.60002V6.72002C90.5693 6.52002 89.0293 8.20002 89.0293 11H87.6893V13.88H89.0293V21H92.0293V13.88H93.8893V11H92.0293C92.0293 9.84002 92.7693 9.50002 93.8893 9.60002Z" fill="#0B0D17"/>
                <path d="M101.681 11L99.8014 17.12L97.5814 11H94.2814L98.2614 20.54C97.8214 21.76 97.1614 22.2 95.7614 22.2V25C98.5614 25.14 100.341 23.88 101.461 20.7L104.881 11H101.681Z" fill="#0B0D17"/>
                </svg>
            </a>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  class="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  class="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm font-medium"
                >
                  Pricing
              </a>
                <a
                  href="#"
                  class="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm font-medium"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div class="space-x-4">
            <a
            href="#"
            class="text-primary  border-b-2 border-transparent hover:bg-secondary  rounded-md  px-5 py-2  text-sm font-medium"
          >
           Login
          </a>
            <button class="bg-primary text-white px-5 py-2  text-sm font-medium rounded-md  hover:bg-secondary hover:text-primary" >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
          href="#"
          class="text-gray-900  border-b-2 border-transparent hover:border-primary block  px-3 py-2  text-sm font-medium"
        >
          About
        </a>
        <a
          href="#"
          class="text-gray-900  border-b-2 border-transparent hover:border-primary block px-3 py-2  text-sm font-medium"
        >
          Products
        </a>
        <a
          href="#"
          class="text-gray-900  border-b-2 border-transparent hover:border-primary block px-3 py-2  text-sm font-medium"
        >
          Pricing
      </a>
        <a
          href="#"
          class="text-gray-900  border-b-2 border-transparent hover:border-primary block px-3 py-2  text-sm font-medium"
        >
          Blog
        </a>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
