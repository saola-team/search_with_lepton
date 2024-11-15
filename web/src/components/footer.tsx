import { FC } from "react";
import Image from "next/image";
import ChevronDownIcon from "../../public/icons/svg/chevron-down.svg";

export const Footer: FC = () => {
  return (
    <footer className="sticky bottom-0 flex flex-col items-center flex-shrink-0 justify-self-end text-xs text-zinc-700 gap-1 py-2">
      <div className="flex gap-1.5">
        <p className="text-sm font-light">Pro</p>
        <p className="text-sm font-light">Blog</p>
        <div className="flex items-center gap-1">
          <p className="text-sm font-light">English (English)</p>
          <Image
            src={ChevronDownIcon.src}
            alt="Chevron down"
            width={ChevronDownIcon.width}
            height={ChevronDownIcon.height}
          />
        </div>
      </div>
    </footer>
  );
};
