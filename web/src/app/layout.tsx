import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/themeProvider";
import { AuthProvider } from "@/components/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lepton Search",
  description:
    "Answer generated by large language models (LLMs). Double check for correctness.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider>
          <body className={inter.className}>
            <div className="relative h-screen flex">
              <Sidebar />
              <div className="flex-1 h-screen flex items-center justify-center">
                {children}
              </div>
            </div>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
