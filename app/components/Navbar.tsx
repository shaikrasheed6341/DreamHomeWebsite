"use client";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const lists = [
    { id: 1, value: "Home", href: "/" },
    { id: 2, value: "Service", href: "/service" },
    { id: 3, value: "Agent", href: "/agent" },
    { id: 4, value: "Contact", href: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FEF7F2] mx-4 md:mx-7 sticky top-0 p-3 shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link href="/" className="text-[#2B1B12] text-xl font-bold">
            Logo
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#2B1B12] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 text-[#2B1B12] absolute md:static top-14 left-0 right-0 bg-[#FEF7F2] md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          {lists.map((list) => (
            <li key={list.id} className="font-semibold py-2 md:py-0">
              <Link
                href={list.href}
                className="hover:text-zinc-900 transition-colors"
              >
                {list.value}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-6">
          <FaSearch className="text-xl text-[#2B1B12] cursor-pointer hover:text-zinc-900" />
          <button className="text-white px-5 py-2 rounded-xl text-sm bg-[#2B1B12] hover:bg-zinc-900 transition-colors">
            <Link href="/signup">Signup</Link>
          </button>
          <button className="text-white px-5 py-2 rounded-xl  text-sm bg-[#2B1B12] hover:bg-zinc-900 transition-colors">
            <Link href="/login">Login</Link>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden flex flex-col space-y-4 mt-4 p-4 bg-[#FEF7F2]`}
        >
          <FaSearch className="text-xl text-[#2B1B12] cursor-pointer hover:text-[#F28C38]" />
          <div>
          <button className="text-white px-5 py-2 rounded-xl text-sm bg-[#2B1B12] hover:bg-[#F28C38] transition-colors w-fit">
            <Link href="/signup">Signup</Link>
          </button>
          <button className="text-white px-5 py-2 rounded-xl text-sm bg-[#2B1B12] hover:bg-[#F28C38] transition-colors w-fit">
            <Link href="/login">Login</Link>
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;