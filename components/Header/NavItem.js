import React from "react";
import Link from "next/link";
export default function NavItem({ link, menuToggle }) {
  return (
    <Link
      href={link}
      className="block w-full bg-gray-50 px-2 py-4"
      onClick={menuToggle}
    >
      Categories
    </Link>
  );
}
