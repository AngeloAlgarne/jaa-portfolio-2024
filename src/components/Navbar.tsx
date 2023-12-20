import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

type NavlinkProps = {
  children?: React.ReactNode;
  href?: string;
};

const Navlink: React.FC<NavlinkProps> = ({ children, href = "/" }) => {
  const className: string = `
    flex-auto px-8 py-2 rounded-2xl
    hover:bg-indigo-900 cursor-pointer transition-all duration-500
  `;
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

function Navbar() {
  return (
    <nav className="flex gap-x-2 fixed top-5 text-white bg-indigo-950 px-1 py-1 rounded-2xl">
      <Navlink>Home</Navlink>
      <Navlink href="/projects">Projects</Navlink>
      <Navlink>About</Navlink>
      <Navlink>Contact</Navlink>
    </nav>
  );
}

export default Navbar;
