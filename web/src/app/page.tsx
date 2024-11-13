"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import backgroundNodeSearch from "./images/background-node-search.png";
import nodeSearchLogo from "./images/node-search.png";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-black w-full h-screen flex  relative">
      <div
        className=" absolute bg-auto bg-center bg-no-repeat w-full h-full z-0"
        style={{ backgroundImage: `url(${backgroundNodeSearch.src})` }}
      />
      <div className="relative z-10 w-full h-full items-center justify-center flex-col">
        <div className="absolute rounded-full border-[1px] border-white w-[600px] h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0" />
        <div className="absolute rounded-full border-[1px] border-white w-[800px] h-[800px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0" />
        <div className="relative z-10 w-full flex h-full items-center flex-col">
          <p className="text-white text-[45px] pt-[370px] font-bold">
            Meet your new shortcut
          </p>
          <div className="flex items-center gap-4 pt-[150px]">
            <Image
              src={nodeSearchLogo}
              alt="Node Search"
              width={100}
              height={100}
            />
            <span className="text-white text-[92px]">Node Search</span>
          </div>
          <button
            className="bg-white px-8 py-3 rounded-[38px] font-bold text-black text-3xl mt-[220px]"
            type="button"
            onClick={() => router.push("/prompt")}>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
