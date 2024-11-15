import React, { FC, useMemo } from "react";
import Image from "next/image";
import { nanoid } from "nanoid";
import { useAuth } from "./authProvider";
import { useRouter } from "next/navigation";
import { getSearchUrl } from "@/utils/get-search-url";
import ShinyIcon from "../../public/icons/svg/shiny.svg";

export const PresetQuery: FC<{ query: string }> = ({ query }) => {
  const { setSignUpModalOpen, isLoggedIn } = useAuth();
  const router = useRouter();
  const rid = useMemo(() => nanoid(), [query]);

  const handleClick = () => {
    if (!isLoggedIn) {
      setSignUpModalOpen(true);
    } else {
      router.push(getSearchUrl(query, rid));
    }
  };

  return (
    <div
      title={query}
      onClick={handleClick}
      className="w-full flex items-center gap-2 border-[0.8px] border-[#00000013] rounded p-1 cursor-pointer"
    >
      <div className="size-8 bg-[#0000000D] rounded-sm flex-shrink-0 flex items-center justify-center">
        <Image src={ShinyIcon.src} alt="shiny" width={18} height={18} />
      </div>
      <p className="text-xs font-light w-full truncate">{query}</p>
    </div>
  );
};
