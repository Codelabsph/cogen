import React, { useState } from "react";
import NavbarIcon from "public/assets/navbar-icon.svg";
import NavLink from "./navLink";
import HamburgerIcon from "./hamburgerIcon";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClickCalculate = (to) => {
    if (to) router.push(to);
  };

  const NavButton = ({ title, to }) => {
    return (
      <button
        onClick={() => handleClickCalculate(to)}
        className="bg-primary text-white px-5 py-2  text-sm font-medium rounded-md  hover:bg-secondary hover:text-primary"
      >
        {title}
      </button>
    );
  };

  return (
    <nav className="bg-white font-manrope fixed w-full shadow-lg toTop top-0">
      <div className="w-full mx-auto  sm:px-8 lg:px-16 xl:px-40 2xl:px-56 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-5 top-5 flex items-center sm:hidden">
            <HamburgerIcon onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start xxs:items-start">
            <div className="flex-shrink-1 flex items-center">
              <NavbarIcon />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 font-extrabold">
                <NavLink to="/" label="Home" />
                <NavLink to="/coOwn" label="Co-own" />
              </div>
            </div>
          </div>
          <div className="space-x-4 xxs:hidden">
            <NavButton title={"Calculate"} to="/calculate" />
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        {isOpen && (
          <div className="pt-2 pb-3 space-y-1  font-extrabold">
            <NavLink to="/" label="Home" />
            <NavLink to="/" label="Co-Own" block />
            <div className="space-x-4">
              <NavLink to="/" label="Get Started" color="primary" />
              <NavButton title={"Calculate"} to="/calculate" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
