
'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    console.log(`Scrolling to section: ${id}`); // Debugging
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Check if user is logged in by checking the cookie
  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove('auth_token');
    setIsAuthenticated(false);
    window.location.reload();
  };

  const lists = [
    { id: 1, value: 'Home', sectionId: '/' , },
    { id: 2, value: 'Projects', sectionId: 'projects' },
    { id: 3, value: 'About', sectionId: 'aboutus' },
    { id: 4, value: 'Contact', sectionId: 'cotactus' },
  ];

  return (
    <nav className="bg-[#ffffff] py-3 px-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-[#2B1B12] font-bold text-xl">
          <div className="rounded-full">
            <Image
              src="https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome//4318759.jpg"
              alt="logo"
              width={100}
              height={50}
              className="rounded-full w-12 ml-5"
            />
          </div>
        </Link>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex space-x-6">
          
          {lists.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.sectionId}`}
                onClick={(e) => handleScroll(e, item.sectionId)}
                className="text-[#2B1B12] font-bold hover:text-zinc-900"
              >
                
                {item.value}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex space-x-4 mr-6">
          {!isAuthenticated ? (
            <>
              <Link href="/signup">
                <button className="bg-[#2B1B12] text-white px-4 py-1.5 rounded-md">Signup</button>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {lists.map((item) => (
            <a
              key={item.id}
              href={`#${item.sectionId}`}
              onClick={(e) => {
                handleScroll(e, item.sectionId);
                setIsOpen(false); // Close menu on click
              }}
              className="block text-[#2B1B12]"
            >
              {item.value}
            </a>
          ))}
          {!isAuthenticated ? (
            <Link href="/signup">
              <button className="w-full bg-[#2B1B12] text-white py-2 rounded-md">Signup</button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;