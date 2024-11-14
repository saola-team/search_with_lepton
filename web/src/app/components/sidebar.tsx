"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { sidebarLinks } from "../constants";
import nodeSearchLogo from "../../../public/icons/svg/logo.svg";
import { useTheme } from "./themeProvider";

const Sidebar = () => {
  const pathname = usePathname();
  const navigate = useRouter();
  const { toggleTheme, darkMode } = useTheme();

  const isLoginPage =
    Boolean(pathname === "/login") ||
    Boolean(pathname === "/signup") ||
    Boolean(pathname === "/");
  return (
    !isLoginPage && (
      <section className="flex h-screen w-[220px] flex-col justify-between border-r border-gray-200 bg-white pt-8 text-black max-md:hidden sm:p-4 xl:p-6 2xl:w-[220px]">
        <nav className="flex flex-col gap-4">
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
                  <Image src={item.imgURL} alt={item.title} fill className="" />
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
          <button className="bg-gradient-02 text-white p-2 rounded-lg w-full max-w-[220px]">
            Sign Up
          </button>

          <button className="bg-black text-white p-2 rounded-lg w-full max-w-[220px]">
            Login
          </button>
          <div className="w-full h-[1px] bg-gray-200 my-4"></div>
          <div className="flex justify-between items-center">
            <div className="flex text-sm font-light gap-1.5">
              <Image
                src={`/icons/svg/down-arrow.svg`}
                alt="down-arrow"
                width={15}
                height={16}
              />
              <p>Download</p>
            </div>
            <div className="flex text-sm font-light gap-1.5">
              {["x", "telegram", "discord"].map((icon) => (
                <div key={icon} className="flex">
                  <Image
                    src={`/icons/svg/${icon}.svg`}
                    alt={icon}
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
