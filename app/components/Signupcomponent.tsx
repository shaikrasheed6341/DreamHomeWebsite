"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import axios from "axios";
import { useRouter } from "next/navigation"

export default function Signupcomponent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setMessage({ type: "error", text: "All fields are required." });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      
      console.log(response);
        
      
      setMessage({ type: "success", text: "Signup successful!" });
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      
    } catch (error:unknown) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || "Signup failed. Please try again.",
      });
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = (provider: "github" | "google") => {
    window.location.href = `/api/auth/${provider}`; // Adjust based on your OAuth setup
  };

  useEffect(()=>{
       if(message?.type === "success"){
        router.push("/")
       }
  },[message,router])

  

  return (
    <div className="flex justify-center bg-[#ffffff]">
      <div className="bg-[#FEF7F2] rounded-2xl text-[#2B1B12] py-15 h-max mr-4 w-1/3 mt-4">
        <div className="text-center text-4xl font-bold text-[#2B1B12] p-5">
          <h1>Dream Home</h1>
        </div>
      </div>
      <div className="shadow-input mt-4 rounded-none p-4 md:rounded-2xl md:p-8 bg-[#FEF7F2]">
        <h2 className="text-xl font-bold text-[#2B1B12]">Welcome to Aceternity</h2>
        <p className="mt-2 max-w-sm text-sm text-[#2B1B12]">
          Create an account to get started.
        </p>

        {message && (
          <div
            className={`mb-4 p-2 text-sm ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </div>
        )}

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

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md px-4 font-medium text-black bg-[#2B1B12]"
              type="button"
              onClick={() => handleOAuth("github")}
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">GitHub</span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-[#2B1B12] px-4 font-medium text-black"
              type="button"
              onClick={() => handleOAuth("google")}
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">Google</span>
              <BottomGradient />
            </button>
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