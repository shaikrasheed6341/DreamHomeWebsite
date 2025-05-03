// app/components/Navbar.jsx
"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check if user is logged in by checking the cookie
  useEffect(() => {
    const token = Cookies.get("auth_token"); // Must match the token key used in login
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth_token"); // Clear cookie
    setIsAuthenticated(false);    // Update UI
    window.location.reload();     // Optional: force re-check on page reload
  };

  const lists = [
    { id: 1, value: "Home", href: "/" },
    { id: 2, value: "Service", href: "/service" },
    { id: 3, value: "Agent", href: "/agent" },
    { id: 4, value: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#FEF7F2] p-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-[#2B1B12] font-bold text-xl">Logo</Link>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex space-x-6">
          {lists.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="text-[#2B1B12] hover:text-orange-500">{item.value}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex space-x-4">
          <FaSearch className="text-[#2B1B12]" />
          {!isAuthenticated ? (
            <>
              <Link href="/signup">
                <button className="bg-[#2B1B12] text-white px-4 py-2 rounded-md">Signup</button>
              </Link>
              <Link href="/login">
                <button className="bg-[#2B1B12] text-white px-4 py-2 rounded-md">Login</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {lists.map((item) => (
            <Link key={item.id} href={item.href} className="block text-[#2B1B12]">{item.value}</Link>
          ))}

          {!isAuthenticated ? (
            <>
              <Link href="/signup"><button className="w-full bg-[#2B1B12] text-white py-2 rounded-md">Signup</button></Link>
              <Link href="/login"><button className="w-full bg-[#2B1B12] text-white py-2 rounded-md">Login</button></Link>
            </>
          ) : (
            <button onClick={handleLogout} className="w-full bg-red-600 text-white py-2 rounded-md">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
