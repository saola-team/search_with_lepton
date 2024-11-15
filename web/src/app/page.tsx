"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import backgroundNodeSearch from "../../public/background.svg";
import nodeSearchIcon from "../../public/icons/svg/node-search-icon.svg";
import Link from "next/link";
import { getHtmlUrl } from "@/utils/get-search-url";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-black w-full h-screen flex  relative">
      <div
        className="absolute bg-cover bg-center bg-no-repeat w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundNodeSearch.src})`,
        }}
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
              src={nodeSearchIcon.src}
              alt="Node Search"
              width={nodeSearchIcon.width}
              height={nodeSearchIcon.height}
            />
          </div>
          <Link
            href={getHtmlUrl("/prompt")}
            className="bg-white px-8 py-3 rounded-[38px] font-bold text-black text-3xl"
            type="button"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
