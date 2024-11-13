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
    <div className="absolute inset-0 bg-[url('/ui/bg.svg')]">
      <div className="mx-auto max-w-3xl absolute inset-4 md:inset-8 bg-white">
        <div className="h-20 pointer-events-none rounded-t-2xl w-full backdrop-filter absolute top-0 bg-gradient-to-t from-transparent to-white [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="px-4 md:px-8 pt-6 pb-36 rounded-2xl ring-8 ring-zinc-300/20 border border-zinc-200 h-full overflow-auto">
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
