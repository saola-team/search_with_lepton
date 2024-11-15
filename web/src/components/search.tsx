"use client";
import { getSearchUrl } from "@/utils/get-search-url";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { useAuth } from "./authProvider";
import PlusIcon from "../../public/icons/svg/plus.svg";
import TelegramWhiteIcon from "../../public/icons/svg/telegram-white.svg";

export const Search: FC = () => {
  const router = useRouter();
  const { isLoggedIn, setSignUpModalOpen } = useAuth();
  const [value, setValue] = useState("");
  const [isProChecked, setIsProChecked] = useState(false);
  const [attachFile, setAttachFile] = useState(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProChecked(e.target.checked);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setSignUpModalOpen(true);
    } else if (value) {
      setValue("");
      router.push(getSearchUrl(encodeURIComponent(value), nanoid()));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label
        className="relative bg-white flex items-center justify-center border border-gradient py-2 px-2 rounded-lg gap-2"
        htmlFor="search-bar"
      >
        <div className="relative flex flex-col gap-4 w-full">
          <textarea
            id="search-bar"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            placeholder="Ask Lepton AI anything ..."
            className="px-2 pr-6 w-full rounded-md flex-1 outline-none bg-white h-20 resize-none"
            rows={2}
          />

          <div className="flex justify-between gap-3 px-2">
            <div className="font-[300] text-[14px] flex items-center gap-1 hover:underline cursor-pointer leading-3">
              <Image src={PlusIcon.src} alt="plus" width={12} height={12} />
              <p className="">Attach file</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative inline-block w-10 h-5">
                <input
                  checked={isProChecked}
                  type="checkbox"
                  id="switch-component-blue"
                  onChange={handleChecked}
                  className="peer appearance-none w-10 h-5 bg-blue-200 rounded-full checked:bg-gradient-01 cursor-pointer transition-colors duration-300"
                />
                <label
                  htmlFor="switch-component-blue"
                  className="absolute left-px top-[2px] size-4 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-[22px] peer-checked:border-blue-200 cursor-pointer"
                ></label>
              </div>
              <p className="text-xs font-medium">Pro</p>

              <button
                type="submit"
                className="flex items-center justify-center p-2 ml-3 bg-gradient-01 size-[30px] text-white flex-shrink-0 fill-white active:scale-95 border overflow-hidden relative rounded-full"
              >
                <Image
                  src={TelegramWhiteIcon.src}
                  unoptimized
                  alt="telegram"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>
      </label>
    </form>
  );
};
