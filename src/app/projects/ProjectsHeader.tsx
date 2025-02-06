"use client";
import Link from "next/link";
import Logo from "./Logo"; // Ensure Logo supports className prop

const ProjectsHeader = () => {
  return (
    <header className="max-w-2xl w-full mx-auto flex flex-col sm:flex-row justify-between items-center pt-8 pb-16 text-customBlue">
      <div className="flex items-center gap-x-2">
        <Link href="/">
          <Logo className="w-12 h-12 text-customBlue hover:scale-105 transition-all" />
        </Link>
        <h1 className="leading-3">
          <Link href="/" className="text-2xl font-bold transition-colors text-customBlue">
            Projects
          </Link>
          <br />
          <span className="text-base text-customBlue">
            by{" "}
            <a
              href="/"
              className="underline transition-colors text-customBlue"
            >
              Nithin S
            </a>
          </span>
        </h1>
      </div>
      <nav className="text-base hidden sm:block">
        <a
          href="/"
          className="py-2 px-4 rounded-lg hover:bg-[#dceaf7] active:bg-[#b6d4eb] transition-colors text-customBlue"
        >
          About me
        </a>
      </nav>
    </header>
  );
};

export default ProjectsHeader;
