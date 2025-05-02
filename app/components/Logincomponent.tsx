"use client";
import axios from "axios";
import { useState } from "react";
import {useRouter} from "next/navigation";
export default function Logincomponent() {
  const Router  = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/Login", formData);
      console.log("Login success:", response.data);
      if(response.status === 200){
      Router.push('/')
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF7F2]">
      <div className="w-full max-w-sm p-8 bg-[#FEF7F2] shadow-lg rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#2B1B12]">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#2B1B12]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2B1B12]">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#2B1B12] text-white font-semibold rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
