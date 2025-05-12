
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Aboutus = () => {
    return (
        <section className="bg-[#FEF7F2] py-10 px-4 sm:px-6 lg:px-10">
            {/* Heading */}
            <motion.div
                className="flex justify-center p-2 mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl sm:text-5xl mb-4  font-extrabold text-[#2B1B12]">
                    About Us
                </h1>
            </motion.div>


            <div className="max-w-6xl mx-auto grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="div ">
                        <Image
                            src="https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome/profileimage.webp"
                            alt="Profile image"
                            width={300}
                            height={50}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className="flex flex-col justify-center space-y-3 flex-wrap  mt-2  md:ml-6  mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="max-w-lg ">
                        <p className="text-base sm:text-lg text-[#2B1B12] font-semibold   sm:p-1">
                            I’m Shaik Rasheed, a dedicated coder from Hyderabad, fueled by a passion for creating seamless web experiences. With expertise in Next.js, React, and Tailwind CSS, I work tirelessly to craft responsive, pixel-perfect applications that bring ideas to life. My commitment to clean code and innovative solutions drives every project, from real estate platforms to dynamic user interfaces.
                        </p>
                        <p className="text-base sm:text-lg text-[#2B1B12] font-semibold  sm:p-1">
                            As a freelancer, I’m focused on delivering tailored solutions that empower businesses. Whether you’re a startup or an entrepreneur, I’m here to transform your vision into reality with precision and creativity. Let’s build something remarkable together—connect with me to start your next project!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Aboutus;