"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { sidebarFooterLinks, sidebarLinks } from "@/constants";
import { useTheme } from "@/components/themeProvider";
import { useAuth } from "./authProvider";
import nodeSearchLogo from "../../public/icons/svg/logo.svg";
import AvatarIcon from "../../public/icons/svg/avatar.svg";
import DownloadArrowIcon from "../../public/icons/svg/down-arrow.svg";
import ChevronDownIcon from "../../public/icons/svg/chevron-down.svg";
import SettingsIcon from "../../public/icons/svg/setting.svg";
const Sidebar = () => {
  const pathname = usePathname();
  const navigate = useRouter();
  const { toggleTheme, darkMode } = useTheme();
  const { isLoggedIn } = useAuth();

  const isShowSidebar =
    Boolean(pathname === "/login") ||
    Boolean(pathname === "/signup") ||
    Boolean(pathname === "/") ||
    Boolean(pathname === "/index.html");

  console.log("pathname =>>>", pathname);

  return (
    !isShowSidebar && (
      <section className="flex h-screen w-[220px] flex-col justify-between border-r border-gray-200 bg-white pt-8 sm:pb-4 xl:pb-6 text-black max-md:hidden 2xl:w-[220px]">
        <nav className="flex flex-col gap-4 sm:p-4 xl:p-6">
          <div className="flex items-center justify-center h-20">
            <Image
              src={nodeSearchLogo.src}
              alt="logo"
              width={nodeSearchLogo.width}
              height={nodeSearchLogo.height}
            />
          </div>

          <button className="flex items-center justify-center gap-2 hover:bg-gray-100 rounded-full border border-[#9BA5BD] p-2 cursor-pointer">
            {/* <div className="relative size-6">
              <Image src={"/icons/svg/plus.svg"} alt="plus" fill />
            </div> */}
            <p>New Thread</p>
          </button>

          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.title.toLocaleLowerCase() ||
              pathname.startsWith(`${item.route}/`);
            return (
              <Link
                key={item.title}
                href={item.route}
                className={`flex items-center gap-2 hover:bg-gray-100 rounded-lg p-2 cursor-pointer ${isActive ? "bg-gray-100" : ""}`}
              >
                <div className="relative size-6">
                  <Image
                    src={item.img.src}
                    alt={item.title}
                    width={item.img.width}
                    height={item.img.height}
                    className=""
                  />
                </div>
                <p className="">{item.title}</p>
              </Link>
            );
          })}

          {/* <div className="relative inline-block w-10 h-5">
            <input
              checked={darkMode}
              type="checkbox"
              id="switch-component-blue"
              onChange={toggleTheme}
              className="peer appearance-none w-10 h-5 bg-blue-200 rounded-full checked:bg-gradient-01 cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="switch-component-blue"
              className="absolute left-px top-[2px] size-4 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-[22px] peer-checked:border-blue-200 cursor-pointer"
            ></label>
          </div>
          {darkMode ? <p>Dark Mode</p> : <p>Light Mode</p>} */}
        </nav>

        <footer className="flex flex-col gap-2">
          {!isLoggedIn ? (
            <div className="sm:px-4 xl:px-6 flex flex-col gap-2">
              <Link
                href="/login?type=signup"
                className="bg-gradient-02 text-center text-white p-2 rounded-lg w-full max-w-[220px]"
              >
                Sign Up
              </Link>

              <Link
                href="/login?type=login"
                className="bg-black text-center text-white p-2 rounded-lg w-full max-w-[220px]"
              >
                Login
              </Link>
            </div>
          ) : (
            <>
              <div className="w-full h-[1px] bg-gray-200 my-2"></div>

              <div className="flex items-center justify-between gap-2 sm:px-4 xl:px-6">
                <div className="flex items-center justify-center gap-1 cursor-pointer">
                  <Image
                    src={AvatarIcon.src}
                    alt="avatar"
                    width={AvatarIcon.width}
                    height={AvatarIcon.height}
                  />
                  <p className="text-sm font-light truncate hover:underline">
                    johndoe2024
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center cursor-pointer">
                    <Image
                      src={ChevronDownIcon.src}
                      alt="Chevron down"
                      width={ChevronDownIcon.width}
                      height={ChevronDownIcon.height}
                    />
                  </div>

                  <div className="flex items-center justify-center cursor-pointer">
                    <Image
                      src={SettingsIcon.src}
                      alt="Settings"
                      width={SettingsIcon.width}
                      height={SettingsIcon.height}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="w-full h-[1px] bg-gray-200 my-2"></div>

          <div className="flex justify-between items-center sm:px-4 xl:px-6">
            <div className="flex text-sm font-light gap-1.5">
              <Image
                src={DownloadArrowIcon.src}
                alt="down-arrow"
                width={15}
                height={16}
              />
              <p>Download</p>
            </div>
            <div className="flex text-sm font-light gap-1.5">
              {sidebarFooterLinks.map((icon) => (
                <div key={icon.title} className="flex">
                  <Image
                    src={icon.img.src}
                    alt={icon.title}
                    width={24}
                    height={24}
                    className="max-h-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </footer>
      </section>
    )
  );
};

export default Sidebar;
