import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white font-manrope shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
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
                className="hidden h-6 w-6"
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start xxs:items-start">
            <div className="flex-shrink-1 flex items-center">
              <a href="#" className="mb-2">
                <svg
                  width="216"
                  height="28"
                  viewBox="0 0 216 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M179.547 15.0767C179.547 12.4984 180.788 11.7464 182.926 11.7464H184.167V6.88525C182.187 6.88525 180.577 7.95955 179.547 9.54413V7.0464H175.904V22.0328H179.547V15.0767Z"
                    fill="black"
                  />
                  <path
                    d="M200.438 11.7579C199.657 8.7072 197.083 6.88525 193.537 6.88525C189.105 6.88525 186.003 10.0207 186.003 14.4696C186.003 18.9185 189.126 22.0328 193.558 22.0328C197.463 22.0328 199.932 19.4694 200.691 16.9059V13.5375H192.841V16.2068H197.42C196.872 17.8805 195.626 18.8338 193.833 18.8338C191.237 18.8338 189.675 17.2237 189.675 14.4696C189.675 11.885 191.216 10.2325 193.537 10.2325C194.888 10.2325 195.901 10.7622 196.45 11.7579H200.438Z"
                    fill="black"
                  />
                  <path
                    d="M201.609 7.34424L206.872 17.1784V22.0328H210.576V17.1784L215.839 7.34424H211.68L208.757 13.4958L205.811 7.34424H201.609Z"
                    fill="black"
                  />
                  <path
                    d="M152.994 13.8682V22.0059L156.625 22.0328V13.2773C156.625 9.2487 154.378 6.88525 151.008 6.88525C149.859 6.88525 148.292 7.74469 147.404 9.00698V7.01954H143.772V22.0059H147.404V13.8682C147.404 11.827 148.501 10.699 150.199 10.699C151.897 10.699 152.994 11.827 152.994 13.8682Z"
                    fill="black"
                  />
                  <path
                    d="M134.252 10.1368C136.978 10.0839 138.196 12.3045 138.222 13.547L130.547 13.5734C130.944 11.0885 132.638 10.1633 134.252 10.1368ZM141.081 17.6709H137.137C136.105 18.6755 134.623 18.7548 134.358 18.7548C134.094 18.7548 131.5 18.6755 130.732 16.217L141.345 16.1905C141.425 15.6883 141.478 14.7102 141.478 14.2079C141.478 9.92534 138.513 6.88525 134.358 6.88525C130.044 6.88525 126.789 9.97821 126.789 14.5515C126.789 19.1249 130.177 22.0328 134.358 22.0328C137.931 22.0328 140.26 20.2087 141.081 17.6709Z"
                    fill="black"
                  />
                  <path
                    d="M166.383 10.1368C169.109 10.0839 170.327 12.3045 170.353 13.547L162.678 13.5734C163.075 11.0885 164.769 10.1633 166.383 10.1368ZM173.211 17.6709H169.268C168.236 18.6755 166.754 18.7548 166.489 18.7548C166.224 18.7548 163.631 18.6755 162.863 16.217L173.476 16.1905C173.556 15.6883 173.608 14.7102 173.608 14.2079C173.608 9.92534 170.644 6.88525 166.489 6.88525C162.175 6.88525 158.92 9.97821 158.92 14.5515C158.92 19.1249 162.308 22.0328 166.489 22.0328C170.062 22.0328 172.391 20.2087 173.211 17.6709Z"
                    fill="black"
                  />
                  <path
                    d="M122.666 22.0328C124.188 22.0328 125.412 20.9865 125.412 19.5047C125.412 18.023 124.196 16.9836 122.666 16.9836C121.144 16.9836 119.904 18.023 119.904 19.5047C119.904 20.9865 121.144 22.0328 122.666 22.0328Z"
                    fill="#22C680"
                  />
                  <path
                    d="M37.8652 14.1898C37.8652 18.7438 41.0314 21.9316 45.5203 21.9316C49.1418 21.9316 51.8742 19.9148 52.7417 16.6186H48.6647C48.0359 17.9197 46.8865 18.5703 45.4769 18.5703C43.1999 18.5703 41.6386 16.8788 41.6386 14.1898C41.6386 11.5007 43.1999 9.80924 45.4769 9.80924C46.8865 9.80924 48.0359 10.4598 48.6647 11.761H52.7417C51.8742 8.46473 49.1418 6.42627 45.5203 6.42627C41.0314 6.42627 37.8652 9.63576 37.8652 14.1898Z"
                    fill="black"
                  />
                  <path
                    d="M62.227 22.0183C66.5425 22.0183 70.0122 18.7871 70.0122 14.2114C70.0122 9.63576 66.5642 6.42627 62.227 6.42627C57.9115 6.42627 54.3984 9.63576 54.3984 14.2114C54.3984 18.7871 57.9115 22.0183 62.227 22.0183ZM62.227 18.6353C59.7548 18.6353 58.1934 16.8788 58.1934 14.2114C58.1934 11.5007 59.7548 9.78756 62.227 9.78756C64.6558 9.78756 66.2389 11.5007 66.2389 14.2114C66.2389 16.8788 64.6558 18.6353 62.227 18.6353Z"
                    fill="black"
                  />
                  <path
                    d="M86.2706 11.414C85.4682 8.29124 82.8225 6.42627 79.1793 6.42627C74.6253 6.42627 71.4375 9.63576 71.4375 14.1898C71.4375 18.7438 74.647 21.9316 79.201 21.9316C83.2129 21.9316 85.7501 19.3076 86.5308 16.6836V13.2356H78.4637V15.968H83.1695C82.6057 17.6812 81.3262 18.657 79.4829 18.657C76.8156 18.657 75.2108 17.0089 75.2108 14.1898C75.2108 11.5441 76.7939 9.85262 79.1793 9.85262C80.5672 9.85262 81.6081 10.3948 82.172 11.414H86.2706Z"
                    fill="black"
                  />
                  <path
                    d="M114.824 13.5441V21.8391L118.629 21.8665V12.9418C118.629 8.83538 116.275 6.42627 112.743 6.42627C111.539 6.42627 109.896 7.30231 108.965 8.589V6.56315H105.16V21.8391H108.965V13.5441C108.965 11.4635 110.115 10.3137 111.895 10.3137C113.674 10.3137 114.824 11.4635 114.824 13.5441Z"
                    fill="black"
                  />
                  <path
                    d="M95.6429 9.77222C98.4448 9.71782 99.6961 12.0029 99.7233 13.2814L91.8345 13.3086C92.2425 10.7515 93.9835 9.79943 95.6429 9.77222ZM102.661 17.525H98.608C97.5471 18.5588 96.0237 18.6404 95.7517 18.6404C95.4797 18.6404 92.8138 18.5588 92.0249 16.0289L102.933 16.0017C103.015 15.4848 103.069 14.4783 103.069 13.9615C103.069 9.5546 100.023 6.42627 95.7517 6.42627C91.3176 6.42627 87.9717 9.60901 87.9717 14.3151C87.9717 19.0212 91.4537 22.0135 95.7517 22.0135C99.4241 22.0135 101.818 20.1365 102.661 17.525Z"
                    fill="black"
                  />
                  <path
                    d="M28.0002 12.8525H11.0166V17.4427H28.0002V12.8525Z"
                    fill="black"
                  />
                  <path
                    d="M27.3872 19.994C25.276 25.0082 19.4738 28 14.203 28C14.0849 28 13.9446 28 13.7822 27.9986C7.2491 27.8923 0 23.2372 0 15.8632V0.25064C0 0.25064 11.9367 0 14.203 0C20.1456 0 26.7598 3.80046 28 10.0146H20.8542C19.2966 7.83647 16.4102 6.3384 14.107 6.3384C10.785 6.3384 7.1162 9.15212 7.1162 12.9317V15.069C7.1162 17.064 8.14238 18.7897 9.59664 19.9747V19.994H9.61863C10.9105 21.0418 12.5494 21.6616 14.107 21.6616C15.5981 21.6616 17.3404 21.0311 18.802 19.994H27.3872Z"
                    fill="#22C680"
                  />
                </svg>
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 font-extrabold">
                <a
                  href="#"
                  className="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm"
                >
                  Co-own
                </a>
              </div>
            </div>
          </div>
          <div className="space-x-4 xxs:hidden">
            <a
              href="#"
              className="text-primary  border-b-2 border-transparent hover:bg-secondary  rounded-md  px-5 py-2  text-sm font-medium"
            >
              Get Started
            </a>
            <button className="bg-primary text-white px-5 py-2  text-sm font-medium rounded-md  hover:bg-secondary hover:text-primary">
              Calculate
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1  font-extrabold">
          <a
            href="#"
            className="text-gray-900  border-b-2 border-transparent hover:border-primary block  px-3 py-2  text-sm"
          >
            Home
          </a>
          <a
            href="/map"
            className="text-gray-900  border-b-2 border-transparent hover:border-primary block px-3 py-2  text-sm"
          >
            Co-own
          </a>
          <div className="space-x-4">
            <a
              href="#"
              className="text-primary  border-b-2 border-transparent hover:bg-secondary  rounded-md  px-5 py-2  text-sm font-medium"
            >
              Get Started
            </a>
            <button className="bg-primary text-white px-5 py-2  text-sm font-medium rounded-md  hover:bg-secondary hover:text-primary">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
