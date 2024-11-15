"use client";

import React, { useRef } from "react";
import Image from "next/image";
import googleIcon from "../../public/icons/svg/google.svg";
import arrowDownIcon from "../../public/icons/svg/chevron-down.svg";
import nodeSearchIcon from "../../public/icons/svg/node-search-icon.svg";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useAuth } from "@/components/authProvider";
import { XIcon } from "lucide-react";

const Popup = () => {
  const { isOpenSignUpModal: isOpen, setSignUpModalOpen } = useAuth();

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setSignUpModalOpen(false));

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div
          ref={ref}
          className="absolute right-0 bottom-0 py-6 px-7 flex flex-col items-center justify-center text-white bg-[#6200FF] shadow-2xl rounded-md text-base font-light"
        >
          <div className="w-full flex items-center justify-end">
            <button
              className="text-white text-sm font-light"
              onClick={() => setSignUpModalOpen(false)}
            >
              <XIcon className="size-4" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 w-fit">
            <div className="flex items-center gap-2 w-[150px]">
              <Image
                src={nodeSearchIcon.src}
                unoptimized
                alt="Node Search"
                width={nodeSearchIcon.width}
                height={nodeSearchIcon.height}
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg whitespace-nowrap">
                Sign in or create an account
              </p>

              <p className="text-[#FFFFFF91] text-sm font-light whitespace-nowrap text-center">
                Unlock Pro Search and History
              </p>

              <button className="w-[245px] bg-white text-black rounded py-3 px-8 flex items-center gap-2">
                <Image
                  src={googleIcon.src}
                  unoptimized
                  alt="Google"
                  width={googleIcon.width}
                  height={googleIcon.height}
                  className="size-4"
                />
                <p className="text-sm font-bold whitespace-nowrap">
                  Continue with Google
                </p>
              </button>

              <div className="flex items-center justify-center gap-2">
                <p className="text-[#FFFFFF91] text-sm font-light whitespace-nowrap text-center">
                  See all options (Apple, SSO)
                </p>
                <Image
                  src={arrowDownIcon.src}
                  unoptimized
                  alt="Arrow Down"
                  width={arrowDownIcon.width}
                  height={arrowDownIcon.height}
                />
              </div>

              <div className="w-full h-px bg-[#FFFFFF91]"></div>

              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-2 bg-transparent border rounded-md border-[#FFFFFF91] outline-none"
              />

              <button className="w-[245px] bg-white text-black rounded py-3 px-8 flex items-center justify-center gap-2">
                <p className="text-sm font-bold whitespace-nowrap text-center">
                  Continue with email
                </p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="absolute right-0 bottom-0 size-8 flex items-center justify-center text-white bg-[#6200FF] shadow-2xl rounded-full text-base font-light cursor-pointer"
          onClick={() => setSignUpModalOpen(true)}
        >
          ?
        </div>
      )}
    </div>
  );
};

export default Popup;
