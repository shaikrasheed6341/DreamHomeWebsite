import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <div className="bg-[#DDC7BB] flex flex-col md:flex-row p-6 md:p-10 justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
                <div className="text-center md:text-left  ">

                    <Link href="/" className="text-[#2B1B12] font-bold text-xl">
                        <div className=" ">
                            <Image src={"https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome//4318759.jpg"} alt="logo" width={100} height={50} className=" w-16 ml-5" />
                        </div>
                    </Link>
                    <div className="text-[#2B1B12] font-sans w-60 md:w-64 my-2 text-sm md:text-base ">
                        Bringing you closer to your dream home, one click at a time.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 lg:ml-25">
                    <div>
                        <div className="font-bold text-lg md:text-xl text-[#2B1B12]">Our Social</div>
                        <ul className="my-1">
                            <div>
                                <div className="flex my-2">
                                    <FaSquareXTwitter className="mt-1 text-[#2B1B12] text-lg" />
                                    <li className="ml-1">
                                        <Link
                                            href={"https://x.com/shaikrasheed634"}
                                            target="_blank"
                                            className="text-[#2B1B12] font-semibold text-sm md:text-base"
                                        >
                                            Twitter (x)
                                        </Link>
                                    </li>
                                </div>
                                <div className="flex my-2">
                                    <FaLinkedin className="mt-1 text-[#2B1B12] text-lg" />
                                    <li className="ml-1">
                                        <Link
                                            href={"https://x.com/shaikrasheed634"}
                                            target="_blank"
                                            className="text-[#2B1B12] font-semibold text-sm md:text-base"
                                        >
                                            Linkdin
                                        </Link>
                                    </li>
                                </div>
                                <div className="flex my-2">
                                    <FaSquareGithub className="mt-1 text-[#2B1B12] text-lg" />
                                    <li className="ml-1">
                                        <Link
                                            href={"https://x.com/shaikrasheed634"}
                                            target="_blank"
                                            className="text-[#2B1B12] font-semibold text-sm md:text-base"
                                        >
                                            Github
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold text-lg md:text-xl text-[#2B1B12]">Support</div>
                        <ul className="my-1">
                            <div>
                                <div className="flex my-2">
                                    <li className="ml-1 text-sm md:text-base">FAQ</li>
                                </div>
                                <div className="flex my-2">
                                    <li className="ml-1 text-sm md:text-base">Contact Us</li>
                                </div>
                                <div className="flex my-2">
                                    <li className="ml-1 text-sm md:text-base">Help Center</li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold text-lg md:text-xl text-[#2B1B12]">Find Us</div>
                        <ul className="my-1">
                            <div>
                                <div className="flex my-2">
                                    <li className="ml-1 text-sm md:text-base">Events</li>
                                </div>
                                <div className="flex my-2">
                                    <li className="ml-1 text-sm md:text-base">Locations</li>
                                </div>
                                <div className="flex my-2">
                                    <li className="ml-1 text-sm md:text-base">Newsletter</li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};