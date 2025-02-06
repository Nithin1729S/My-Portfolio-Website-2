"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-2xl px-4 sm:px-0 flex flex-col sm:flex-row gap-y-4 items-center justify-between mx-auto mb-8 pt-16 mt-auto self-end w-full text-customBlue">
      <div className="flex gap-x-4 items-center py-2 px-4 rounded-lg transition-colors mx-auto sm:mx-0">
        <Image
          src="/assets/me.png"
          alt="Nithin S"
          width={128}
          height={128}
          className="rounded-full w-16 h-16"
        />
        <div className="flex flex-col">
          <span className="font-medium text-xl text-customBlue">Nithin S</span>
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-base flex gap-x-1 hover:gap-x-2 transition-all items-center font-light underline text-customBlue"
          >
            <span>Visit my portfolio</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
      <div className="gap-x-4 flex">
        <a href="https://github.com/yuunsgit" target="_blank" rel="noreferrer noopener">
          <Image
            src="/assets/socials/github.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="h-6 w-6 hover:rotate-6 grayscale hover:grayscale-0 transition-all"
          />
        </a>
        <a href="https://www.linkedin.com/in/yekepenek/" target="_blank" rel="noreferrer noopener">
          <Image
            src="/assets/socials/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="h-6 w-6 hover:rotate-6 grayscale hover:grayscale-0 transition-all"
          />
        </a>
        <a href="/rss.xml" target="_blank" rel="noreferrer noopener">
          <Image
            src="/assets/socials/mail.svg"
            alt="RSS Feed"
            width={24}
            height={24}
            className="h-6 w-6 hover:rotate-6 grayscale hover:grayscale-0 transition-all"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
