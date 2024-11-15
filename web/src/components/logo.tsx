import React, { FC } from "react";
import Image from "next/image";
import NodeSearchLogo from "../../public/icons/svg/logo.svg";

export const Logo: FC = () => {
  return (
    <div className="flex gap-4 items-center justify-center cursor-default select-none relative">
      <Image src={NodeSearchLogo.src} alt="logo" width={300} height={200} />
      <div className="transform scale-75 origin-left border items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div>
    </div>
  );
};
