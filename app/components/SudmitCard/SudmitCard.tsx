'use client';

import axios from 'axios';
import React, { useState } from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SubmitCard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Client-side validation
      

      const response = await axios.post('http://localhost:3000/api/custmor', {
        username,
        email,
        phonenumber,
      });

      toast.success(response.data.message || 'Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });

      // Reset form
      setUsername('');
      setEmail('');
      setPhonenumber('');
    } catch (error: unknown) {
      let errorMessage = 'Something went wrong, please try again.';

      if (axios.isAxiosError(error)) {
        if (error.response) {
          errorMessage = error.response.data.error || errorMessage;
        } else if (error.request) {
          errorMessage = 'Network error: Unable to reach the server.';
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
      });

      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center my-5">
          <div className="bg-[#DDC7BB] w-max p-10 rounded-2xl">
            <p className="font-bold text-center my-3 p-3 text-4xl text-[#2B1B12]">
              Contact Us
            </p>

            {/* Username Input */}
            <div className="flex relative">
              <FaUser className="absolute text-2xl mt-3 right-3 text-[#2B1B12]" />
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="py-3 px-5 bg-[#FBF5F1] rounded-xl w-80"
                placeholder="Name"
                type="text"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex relative my-5">
              <MdOutgoingMail className="absolute text-3xl mt-3 right-3 text-[#2B1B12]" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="py-3 px-5 bg-[#FBF5F1] rounded-xl w-80"
                placeholder="Email"
                type="email"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="flex relative mb-7">
              <FaPhoneAlt className="absolute text-2xl mt-3 right-3 text-[#2B1B12]" />
              <input
                onChange={(e) => setPhonenumber(e.target.value)}
                value={phonenumber}
                className="py-3 px-5 bg-[#FBF5F1] rounded-xl w-80"
                placeholder="Phone"
                type="tel"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`py-2 bg-[#2B1B12] px-6 rounded-xl text-white font-semibold ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};
