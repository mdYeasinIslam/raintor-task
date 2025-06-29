import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Navbar() {
  const navItems = (name: string, link: string) => {
    return (
      <li>
        <Link href={link}>{name}</Link>
      </li>
    );
  };
  return (
    <nav className="container mx-auto flex items-center justify-between my-7 px-12">
      <header className="uppercase text-2xl font-bold text-center  ">
        Develop.me
      </header>

      <ul className="flex items-center gap-5">
        {navItems("Home", "/")}
        {navItems("About", "/about")}
        {navItems("Portfolio", "/portfolio")}
        {navItems("Blog", "/blog")}
        <button className="flex items-center border border-gray-400 rounded-full px-4 py-2 bg-white hover:bg-gray-100 transition-colors">
          <FiArrowRightCircle className="flex items-center justify-center w-8 h-8 rounded-full   mr-2" />

          <span className="font-semibold text-gray-800">Schedule a Call</span>
        </button>
      </ul>
    </nav>
  );
}
