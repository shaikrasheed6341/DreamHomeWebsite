import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#DDC7BB] text-[#2B1B12] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" aria-label="Home">
            <Image
              src="https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome//4318759.jpg"
              alt="Dream Home Logo"
              width={80}
              height={40}
              className="w-20 h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>
          <p className="mt-4 text-sm md:text-base font-sans font-semibold max-w-xs leading-relaxed">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>

        {/* Social Links */}
        
        <div className=" ">
          <h3 className="font-bold text-lg md:text-xl mb-4 text-[#2B1B12] tracking-tight">
            Our Social
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 group">
              <FaSquareXTwitter className="text-xl transition-colors duration-300 group-hover:text-[#4A372A]" />
              <Link
                href="https://x.com/shaikrasheed634"
                target="_blank"
                className="text-sm md:text-base font-semibold transition-colors duration-300 group-hover:text-[#4A372A] group-hover:underline"
                aria-label="Follow us on Twitter"
              >
                Twitter (X)
              </Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaLinkedin className="text-xl transition-colors duration-300 group-hover:text-[#4A372A]" />
              <Link
                href="https://www.linkedin.com/in/shaik-rasheed-4b76a9276/" // Replace with correct LinkedIn URL
                target="_blank"
                className="text-sm md:text-base font-semibold transition-colors duration-300 group-hover:text-[#4A372A] group-hover:underline"
                aria-label="Connect with us on LinkedIn"
              >
                LinkedIn
              </Link>
            </li>
            <li className="flex items-center gap-3 group">
              <FaSquareGithub className="text-xl transition-colors duration-300 group-hover:text-[#4A372A]" />
              <Link
                href="https://github.com/shaikrasheed" // Replace with correct GitHub URL
                target="_blank"
                className="text-sm md:text-base font-semibold transition-colors duration-300 group-hover:text-[#4A372A] group-hover:underline"
                aria-label="Visit our GitHub"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="">
          <h3 className="font-bold text-lg md:text-xl mb-4 text-[#2B1B12] tracking-tight">
            Support
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/faq"
                className="text-sm md:text-base font-semibold transition-colors duration-300 hover:text-[#4A372A] hover:underline"
                aria-label="Frequently Asked Questions"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm md:text-base font-semibold transition-colors duration-300 hover:text-[#4A372A] hover:underline"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className="text-sm md:text-base font-semibold transition-colors duration-300 hover:text-[#4A372A] hover:underline"
                aria-label="Help Center"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us Links */}
        <div>
          <h3 className="font-bold text-lg md:text-xl mb-4 text-[#2B1B12] tracking-tight">
            Find Us
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/events"
                className="text-sm md:text-base font-semibold transition-colors duration-300 hover:text-[#4A372A] hover:underline"
                aria-label="Upcoming Events"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="text-sm md:text-base font-semibold transition-colors duration-300 hover:text-[#4A372A] hover:underline"
                aria-label="Our Locations"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/newsletter"
                className="text-sm md:text-base font-semibold transition-colors duration-300 hover:text-[#4A372A] hover:underline"
                aria-label="Subscribe to Newsletter"
              >
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
