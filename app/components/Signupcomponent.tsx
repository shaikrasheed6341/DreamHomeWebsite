"use client";
import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Signupcomponent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password) {
      toast.error("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      });

      toast.success(response.data.message || "Successfully signed up!");

      setFormData({ firstName: "", lastName: "", email: "", password: "" });

      // Redirect to login after a short delay
      setTimeout(() => {
        router.push("/Loginform");
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center bg-[#ffffff]">
      <div className="bg-[#FEF7F2] rounded-2xl text-[#2B1B12] py-15 h-max mr-4 w-1/3 mt-4">
        <div className="text-center text-4xl font-bold text-[#2B1B12] p-5 mb-3">
          <h1>Dream Home</h1>
          <div className="object-cover pb-2">
            <Image
              src="https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome//4318759.jpg"
              width={600}
              height={100}
              alt="building"
            />
          </div>
        </div>
      </div>

      <div className="shadow-input mt-4 rounded-none p-4 md:rounded-2xl md:p-8 bg-[#FEF7F2]">
        <h2 className="text-xl font-bold text-[#2B1B12]">Welcome to Dream Home</h2>
        <p className="mt-2 max-w-sm text-sm text-[#2B1B12]">
          Create an account to get started.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                placeholder="Tyler"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                placeholder="Durden"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-[#2B1B12] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up →"}
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-[#2B1B12]" />
          <div>
            <Link href="/Loginform">
              <button className="bg-[#2B1B12] text-white px-44 py-2 rounded-md">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
