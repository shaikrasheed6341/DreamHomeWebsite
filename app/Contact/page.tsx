"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For animations

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    location: "",
  });
  const [loading, setLoading] = useState(true);

  const apiurl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`;

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get(apiurl);
        setContactData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchContact();
  }, [apiurl]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-green-500  rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg w-full px-8 py-12 sm:px-16 sm:py-16 relative overflow-hidden"
      >
        {/* Subtle decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-transparent opacity-50" />

        <div className="relative flex justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8"
          >
            <Image
              src="https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome/profileimage.webp"
              alt={`${contactData.name}'s profile picture`}
              fill
              className="rounded-full object-cover border-4 border-green-500 shadow-lg"
              sizes="(max-width: 640px) 128px, 160px"
              priority
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
          </motion.div>
        </div>

        <div className="text-center space-y-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight"
          >
            {contactData.name || "Contact Name"}
          </motion.h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-600 text-sm sm:text-base font-semibold flex items-center justify-center hover:text-indigo-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-gray-600 text-sm sm:text-base font-semibold flex items-center justify-center hover:text-indigo-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${contactData.phonenumber}`}>{contactData.phonenumber}</a>
              </motion.p>
            </div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-600 text-sm sm:text-base font-semibold flex items-center justify-center hover:text-indigo-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {contactData.location}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}