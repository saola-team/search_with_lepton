"use client";
import { Logo } from "@/components/logo";
import { PresetQuery } from "@/components/preset-query";
import { Search } from "@/components/search";
import { Footer } from "@/components/footer";
import Popup from "@/components/popup";

const presetQueries = [
  "Who is the president of the United States?",
  "Why do we only see one side of the moon?",
  "What is top 10 trending topics in 2024?",
  "What is the weather in Tokyo?",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="inset-0 min-h-[500px] w-full max-w-2xl flex items-center justify-center h-[calc(100vh-50px)]">
        <div className="relative flex flex-col gap-8 px-4 -mt-24 w-full">
          <Logo />
          <Search />
          <Popup />
          <div className="grid grid-cols-2 gap-2">
            {presetQueries.map((query, index) => (
              <PresetQuery key={index} query={query} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
