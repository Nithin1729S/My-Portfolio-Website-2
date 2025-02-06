"use client";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const Main = dynamic(() => import("@/components/main"), { ssr: false });


export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center px-6 md:px-12 lg:flex-row lg:gap-20 xl:gap-20">
      <Hero />
      <Main />
    </div>
  );
}
