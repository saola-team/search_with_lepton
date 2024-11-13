import Image from "next/image";
import React, { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="flex gap-4 items-center justify-center cursor-default select-none relative">
      <Image src="/ui/icons/svg/logo.svg" alt="logo" width={300} height={200} />
      <div className="transform scale-75 origin-left border items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div>
    </div>
  );
};
