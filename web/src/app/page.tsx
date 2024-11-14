"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import backgroundNodeSearch from "./images/background-node-search.png";
import nodeSearchIcon from "../../public/icons/svg/node-search-icon.svg";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-black w-full h-screen flex  relative">
      <div
        className="absolute bg-auto bg-center bg-no-repeat w-full h-full z-0"
        style={{ backgroundImage: `url(${backgroundNodeSearch.src})` }}
      />
      <div className="relative z-10 w-full h-full items-center justify-center flex-col">
        <div className="absolute rounded-full border-[1px] border-white w-[600px] h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0" />
        <div className="absolute rounded-full border-[1px] border-white w-[800px] h-[800px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0" />
        <div className="relative z-10 w-full flex h-full items-center flex-col justify-center gap-28 max-lg:gap-12">
          <p className="text-white text-[45px] font-bold">
            Meet your new shortcut
          </p>
          <div className="flex items-center gap-4 w-full max-w-[700px]">
            <Image
              src="/ui/images/node-search.png"
              alt="Node Search"
              width={nodeSearchIcon.width}
              height={nodeSearchIcon.height}
            />
          </div>
          <button
            className="bg-white px-8 py-3 rounded-[38px] font-bold text-black text-3xl"
            type="button"
            onClick={() => router.push("/prompt")}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
