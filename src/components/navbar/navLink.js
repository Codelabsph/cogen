import React from "react";
import Link from "next/link";

const NavLink = ({ label, to, block = false, color }) => {

  const textColor = color === 'primary' ? "text-primary" : "text-gray-900"
  return (
    <Link href={to || "/"}>
      {label && (
        <a
          href="#"
          className={`${
            block ? "block " : ""
          }${textColor}  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm`}
        >
          {label}
        </a>
      )}
    </Link>
  );
};

export default NavLink;
