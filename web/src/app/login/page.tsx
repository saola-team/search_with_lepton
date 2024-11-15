"use client";

import Image from "next/image";
import React from "react";
import IconButton from "@/components/iconButton";
import googleIcon from "../../../public/icons/svg/google-white.svg";
import appleIcon from "../../../public/icons/svg/apple.svg";
import keyIcon from "../../../public/icons/svg/key.svg";
import { useAuth } from "@/components/authProvider";
import { useRouter } from "next/navigation";

const Login = () => {
  const { isLoggedIn, login } = useAuth();
  const router = useRouter();
  const handleLogin = () => {
    login();
    router.push("/prompt");
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-[40px] font-light text-center leading-[44.44px]">
          Welcome
        </h1>
        <p className="text-base text-[#50618C91] text-center">
          Sign in or sign up to continue
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <IconButton
          icon={
            <Image
              src={googleIcon.src}
              alt="Google"
              width={googleIcon.width}
              height={googleIcon.height}
            />
          }
          text="Continue with Google"
          containerStyle="bg-gradient-02 text-white rounded py-3 px-8 flex items-center justify-center gap-2"
          handleClick={handleLogin}
        />

        <IconButton
          icon={
            <Image
              src={appleIcon.src}
              alt="Apple"
              width={appleIcon.width}
              height={appleIcon.height}
            />
          }
          text="Continue with Apple"
          containerStyle="bg-[#6200FF0D] text-black rounded border border-[#6200FF0D] py-3 px-8 flex items-center justify-center gap-2"
          handleClick={handleLogin}
        />

        <IconButton
          icon={
            <Image
              src={keyIcon.src}
              alt="Key"
              width={keyIcon.width}
              height={keyIcon.height}
            />
          }
          text="Single Sign-On (SSO)"
          containerStyle="bg-[#6200FF0D] text-black rounded border border-[#6200FF0D] py-3 px-8 flex items-center justify-center gap-2"
          handleClick={handleLogin}
        />

        <div className="w-full h-[1px] bg-[#E0E0E0] my-4"></div>

        <input
          type="text"
          placeholder="Enter your email"
          className="w-full p-3 bg-transparent border rounded border-[#50618C91] outline-none"
        />

        <IconButton
          text="Continue with email"
          containerStyle="bg-[#6200FF0D] text-black rounded border border-[#6200FF0D] py-3 px-8 flex items-center justify-center gap-2"
          handleClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
