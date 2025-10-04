"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      {/* Scroll Down Indicator */}
      <div className="flex justify-center items-center mb-4">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-customBlue animate-bounce"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </div>
      
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
              className="text-base flex gap-x-1 hover:gap-x-2 transition-all items-center font-light underline text-customBlue"
            >
              <span>Back to Home</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
        <div className="gap-x-4 flex">
          <a href="https://github.com/Nithin1729S" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/socials/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="h-6 w-6 hover:rotate-6 grayscale hover:grayscale-0 transition-all"
            />
          </a>
          <a href="https://www.linkedin.com/in/nithin1729s/" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/socials/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="h-6 w-6 hover:rotate-6 grayscale hover:grayscale-0 transition-all"
            />
          </a>
          <a href="mailto:sureshnithin1729@gmail.com" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/socials/mail.svg"
              alt="Mail"
              width={24}
              height={24}
              className="h-6 w-6 hover:rotate-6 grayscale hover:grayscale-0 transition-all"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;