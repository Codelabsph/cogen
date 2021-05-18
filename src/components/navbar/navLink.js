import React from "react";
import Link from "next/link";

const NavLink = ({ label, to }) => {
  return (
    <Link href={to || "/"}>
      {label && (
        <a
          href="#"
          class="text-gray-900  border-b-2 border-transparent hover:border-primary px-3 py-2  text-sm"
        >
          {label}
        </a>
      )}
    </Link>
  );
};

export default NavLink;
