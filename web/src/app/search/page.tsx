"use client";
import { Result } from "@/app/components/result";
import { Search } from "@/app/components/search";
import { Title } from "@/app/components/title";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("q") || "");
  const rid = decodeURIComponent(searchParams.get("rid") || "");

  return (
    <>
      <Title query={query}></Title>
      <Result key={rid} query={query} rid={rid}></Result>
    </>
  );
};

export default function SearchPage() {
  return (
    <div className="w-full h-screen overflow-y-auto">
      <div className="mx-auto max-w-3xl relative inset-4 bg-white">
        <div className="h-20 max-xl:h-10 max-lg:h-5 pointer-events-none rounded-t-2xl w-full backdrop-filter relative bg-gradient-to-t from-transparent to-white [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="max-h-[calc(100vh-100px)] min-h-[600px] px-4 md:px-8 pt-6 pb-44 rounded-2xl ring-8 ring-zinc-300/20 border border-zinc-20 overflow-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchContent />
          </Suspense>
        </div>
        <div className="h-80 pointer-events-none w-full rounded-b-2xl backdrop-filter absolute bottom-0 bg-gradient-to-b from-transparent to-white [mask-image:linear-gradient(to_top,white,transparent)]"></div>
        <div className="absolute z-10 flex items-center justify-center bottom-6 px-4 md:px-8 w-full">
          <div className="w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <Search />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
