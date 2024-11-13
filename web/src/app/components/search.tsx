"use client";
import { getSearchUrl } from "@/app/utils/get-search-url";
import { ArrowRight } from "lucide-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

export const Search: FC = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [isProChecked, setIsProChecked] = useState(false);
  const [attachFile, setAttachFile] = useState(false);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProChecked(e.target.checked);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) {
          setValue("");
          router.push(getSearchUrl(encodeURIComponent(value), nanoid()));
        }
      }}
    >
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
              <Image
                src="/icons/svg/plus.svg"
                alt="plus"
                width={12}
                height={12}
              />
              <p className="">Attach file</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative inline-block w-8 h-4">
                <input
                  checked={isProChecked}
                  type="checkbox"
                  id="switch-component-blue"
                  onChange={handleChecked}
                  className="peer appearance-none w-8 h-4 bg-blue-200 rounded-full checked:bg-gradient-01 cursor-pointer transition-colors duration-300"
                />
                <label
                  htmlFor="switch-component-blue"
                  className="absolute left-px top-[3px] size-3.5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-4 peer-checked:border-blue-200 cursor-pointer"
                ></label>
              </div>

              <button
                type="submit"
                className="w-auto py-1 px-2 bg-black border-black text-white fill-white active:scale-95 border overflow-hidden relative rounded-xl"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </label>
    </form>
  );
};
