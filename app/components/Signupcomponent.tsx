"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import axios from "axios";

export  default function Signupcomponent() {

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result= await axios.post("/api/auth/signup");
    console.log(result)
  };
     
    
  return (
    <div className="flex justify-center bg-[#ffffff] ">
      <div className="bg-[#FEF7F2]  rounded-2xl text-[#2B1B12]  py-15 h-max mr-4 w-1/3 mt-4  ">
        <div className="text-center text-4xl font-bold text-[#2B1B12] p-5">
          <h1 >Dream Home</h1>
        </div>
        {/* <Image src={Landingpage} alt="landingoageimage" width={900} className="mb-6 " /> */}
      </div>
      <div className="shadow-input  mt-4 rounded-none  p-4 md:rounded-2xl md:p-8 bg-[#FEF7F2]">
        <h2 className="text-xl font-bold text-[#2B1B12] ">
          Welcome to Aceternity
        </h2>
        <p className="mt-2 max-w-sm text-sm text-[#2B1B12]">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2  md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname" >First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="gmail">Email Address</Label>
            <Input id="gmail" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-[#2B1B12] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-[#2B1B12]" />

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md  px-4 font-medium text-black bg-[#2B1B12] dark:shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-[#2B1B12] px-4 font-medium text-black  dark:shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Google
              </span>
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
  return (
    <div className={cn("flex w-full flex-col  space-y-2", className)}>
      {children}
    </div>
  );
};

