"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import imageStyleTransfer from "@/assets/projects/imageStyleTransfer.png";
import airesume from "@/assets/projects/ai-resume.png";
import sudoku from "@/assets/projects/sudoku.png";
import ds from "@/assets/projects/ds.png";
import Arrow from "@/assets/icons/arrow.svg";
import Chat from "@/components/chat";
import ButtonGroup from "@/components/button-group";

const experience = [
  {
    title: "Software Engineering Intern",
    company: "Google India",
    link: "https://drive.google.com/file/d/14Zy0gxOhisvAHLqrwU6NmIosM91Zi5Zh/view?usp=sharing",
    location: "Bengaluru, India",
    date: {
      start: "May 2025",
      end: "August 2025",
    },
    description:
      "Fine-tuned an LLM with distillation techniques to improve local ad targeting by matching user queries to optimal ads, and built a scalable data pipeline using optimized SQL for training data extraction. Integrated the model into low-latency ads stack and validated its effectiveness by deployting it in 1% Search Traffic, resulting in positive click-through rates.",
    skills: ["C++", "Large Language Models", "Python", "SQL", "Pipeline Design"],
  },
  {
    title: "Executive Member",
    company: "ISTE NITK",
    link: "https://iste.nitk.ac.in/#/#/",
    location: "Mangalore, India",
    date: {
      start: "Dec 2022",
      end: "April 2025",
    },
    description:
      "Mentored over 50+ students under SMP'24 and Worked on 3 projects under Crypt SIG",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Material UI"],
  },
  {
    title: "NLP Intern",
    company: "HALE Lab NITK",
    link: "halelabnitk.github.io",
    location: "Mangalore, India",
    date: {
      start: "April 2024",
      end: "July 2024",
    },
    description:
      "Trained a Natural Language Processing (NLP) model to interpret chest X-ray images and generate radiology reports by fine-tuning BioClinicalBERT and BioMedCLIP hugging face transformers",
    skills: ["Natural Language Processing", "PyTorch", "Python", "Streamlit"],
  },
  {
    title: "Student Member",
    company: "IEEE NITK",
    link: "https://ieee.nitk.ac.in/",
    location: "Mangalore, India",
    date: {
      start: "Nov 2022",
      end: "July 2023",
    },
    description:
      "Involved in a project that aims to simulate a Robotic arm using the Robot Operating System (ROS).",
    skills: ["PyTorch", "Tkinter", "ROS"],
  },
];
const education = [
  {
    title: "National Institute of Technology Karnataka",
    company: "B.Tech in Information Technology",
    link: "https://iste.nitk.ac.in/#/#/",
    location: "Mangalore, India",
    date: {
      start: "Nov 2022",
      end: "Aug 2026",
    },
    //description: "Grade: 9.56/10.0",
    description: "",
  },
  {
    title: "National Institute of Technology Karnataka",
    company: "Minor in Machine Learning",
    link: "halelabnitk.github.io",
    location: "Mangalore, India",
    date: {
      start: "Aug 2023",
      end: "Aug 2026",
    },
    description: "",
  },
];

const projects = [
  {
    title: "Image Style Transfer Using CNNs",
    link: "https://github.com/Nithin1729S/Image-Style-Transfer-Using-CNNs.git",
    thumbnail: imageStyleTransfer,
    description: "A Flask application that uses neural style transfer to blend content and style images effortlessly",
    skills: ["Pytorch", "CNN", "Flask", "Python"],
    wip: false,
  },
  {
    title: "AI Resume Insights",
    link: "https://github.com/Nithin1729S/AI-Resume-Insights",
    thumbnail: airesume,
    description: "An AI-driven resume feedback system built with Langchain and Gemini API.",
    skills: ["Langchain", "Gemini API", "Next.js", "Django"],
    wip: false,
  },
  {
    title: "Neuro Sudoku",
    link: "https://github.com/Nithin1729S/Neuro-Sudoku",
    thumbnail: sudoku,
    description: "A full-stack web application for real-time Sudoku solving.",
    skills: ["ViT", "Next.js", "FastAPI", "TypeScript"],
    wip: false,
  },
  {
    title: "Distributed P2P Database",
    link: "https://github.com/Nithin1729S/Distributed-DB",
    thumbnail: ds,
    description: "This project is a distributed file storage system implemented in Go.",
    skills: ["Golang", "TCP", "AES-CTR", "CAS"],
    wip: false,
  },
];

export default function Main() {
  return (
    <main className="pb-10 pt-24 text-skeptic-800 md:pb-16 lg:max-w-prose lg:py-16">
      <Chat />

      <section id="about" className="mb-24 scroll-mt-16" aria-label="About me">
  <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
  <p className="mt-5 text-skeptic-900">
    As a final year undergraduate at the{" "}
    <strong>National Institute of Technology, Karnataka</strong>, I&apos;m
    passionate about the ever-evolving world of technology. Currently
    pursuing a Bachelor&apos;s in Information Technology with a minor in
    Machine Learning, I&apos;m on a journey to explore the endless
    possibilities that technology offers.
  </p>
  <p className="mt-3 text-skeptic-900">
    I recently completed a Software Engineering Internship at <strong> Google India</strong>, 
    where I had the opportunity to work on impactful real-world projects in Google Ads and deepen my software development skills.
  </p>
  <p className="mt-3 text-skeptic-900">
    With a deep fascination for emerging tech trends and their impact on
    our daily lives, I&apos;m dedicated to staying at the forefront of
    innovation and contributing to the tech ecosystem.
  </p>
  <p className="mt-3 text-skeptic-900">
    I am proficient in C, C++ and Python with a strong hold on Data
    Structures and Algorithms. My areas of interest include Software
    Development, Machine Learning, Deep Learning, Data Analytics, NLP,
    Blockchain and Database Management Systems. I am a keen learner,
    hardworking and a good problem solver with a strong work ethic. I have
    completed several projects in the fields of Web Development, Machine
    Learning, Deep Learning, NLP and Blockchain.
  </p>
  <ButtonGroup />
</section>


      <section
        id="experience"
        className="mb-24 scroll-mt-16"
        aria-label="Professional work experience"
      >
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <ul className="ml-1 mt-5 flex flex-col text-skeptic-900">
          {experience.map((exp, index) => (
            <li
              className={cn(
                "relative ml-3 pl-5 before:absolute before:-left-2 before:top-2 before:h-full before:w-0.5 before:rounded-full before:bg-slate-300 before:content-[''] after:absolute after:-left-[0.93rem] after:top-1 after:size-4 after:rounded-full after:bg-slate-300 after:content-['']",
                index !== experience.length - 1 && "pb-10",
                index === 0 && "after:bg-skeptic-700",
              )}
              key={index}
            >
              <div className="flex flex-col-reverse justify-between gap-y-2 sm:flex-row">
                <h3 className="relative flex flex-col leading-snug">
                  <span className="text-lg font-bold leading-none tracking-tight">
                    {exp.title}
                  </span>
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group font-medium tracking-tight hover:text-skeptic-700"
                  >
                    {exp.company}
                    <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </h3>
                <aside className="flex-shrink-0">
                  <p
                    aria-label={`Worked from ${exp.date.start} to ${exp.date.end}`}
                    className="text-xs font-semibold text-skeptic-800 sm:text-end sm:text-sm"
                  >
                    {exp.date.start} &mdash; {exp.date.end}
                  </p>
                  <p
                    aria-label={`Located in ${exp.location}`}
                    className="text-xs text-skeptic-800 sm:text-end sm:text-sm"
                  >
                    {exp.location}
                  </p>
                </aside>
              </div>
              <div className="mt-3 text-skeptic-950">
                <p className="text-sm">{exp.description}</p>
                <ul
                  className="mr-14 mt-3 flex flex-wrap gap-1.5 tracking-wide sm:gap-2"
                  aria-label="Technology stack"
                >
                  {exp.skills.map((skill) => (
                    <li
                      className="rounded-full bg-skeptic-700 px-3 py-1 text-xs text-skeptic-50"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section
        id="education"
        className="mb-24 scroll-mt-16"
        aria-label="Education"
      >
        <h2 className="text-2xl font-bold tracking-tight">Education</h2>
        <ul className="ml-1 mt-5 flex flex-col text-skeptic-900">
          {education.map((exp, index) => (
            <li
              className={cn(
                "relative ml-3 pl-5 before:absolute before:-left-2 before:top-2 before:h-full before:w-0.5 before:rounded-full before:bg-slate-300 before:content-[''] after:absolute after:-left-[0.93rem] after:top-1 after:size-4 after:rounded-full after:bg-slate-300 after:content-['']",
                index !== education.length - 1 && "pb-10",
                index === 0 && "after:bg-skeptic-700",
                index === 1 && "after:bg-skeptic-700",
              )}
              key={index}
            >
              <div className="flex flex-col-reverse justify-between gap-y-2 sm:flex-row">
                <h3 className="relative flex flex-col leading-snug">
                  <span className="pb-1 text-lg font-bold leading-none tracking-tight">
                    {exp.title}
                  </span>
                  {exp.company}
                </h3>
                <aside className="flex-shrink-0">
                  <p
                    aria-label={`Worked from ${exp.date.start} to ${exp.date.end}`}
                    className="text-xs font-semibold text-skeptic-800 sm:text-end sm:text-sm"
                  >
                    {exp.date.start} &mdash; {exp.date.end}
                  </p>
                  <p
                    aria-label={`Located in ${exp.location}`}
                    className="text-xs text-skeptic-800 sm:text-end sm:text-sm"
                  >
                    {exp.location}
                  </p>
                </aside>
              </div>
              <div className="mt-3 text-skeptic-950">
                <p className="text-sm">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="projects"
        className="mb-24 scroll-mt-16"
        aria-label="Projects I've worked on"
      >
        <h2 className="text-2xl font-bold tracking-tight">
          Some Things I&apos;ve Built
        </h2>
        <ul className="mt-8 flex flex-col gap-14 text-skeptic-900">
          {projects.slice(0,4).map((project) => (
            <li
              className="group relative z-0 flex flex-col gap-4 sm:flex-row"
              key={project.title}
            >
              <div
                className="absolute inset-0 -z-10 hidden rounded-md transition-all motion-reduce:transition-none lg:block lg:group-hover:-inset-5 lg:group-hover:bg-skeptic-200"
                aria-hidden="true"
              />
              <div className="relative size-fit flex-shrink-0 rounded">
                {project.wip && (
                  <div
                    className="absolute inset-0 z-10 flex size-full items-center justify-center rounded bg-opacity-50 bg-wip-overlay text-xl font-bold tracking-wider text-skeptic-50 transition-all lg:group-hover:opacity-0"
                    aria-label="Work in progress"
                  >
                    &mdash; WIP &mdash;
                  </div>
                )}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={180}
                  quality={100}
                  className="relative rounded border border-skeptic-400"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-none">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>{project.title}</span>
                    <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[4px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span
                      className="absolute -inset-x-4 -inset-y-2.5 z-20 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                      aria-hidden="true"
                    />
                  </Link>
                </h3>
                <div className="mt-3 text-skeptic-950">
                  <p className="text-sm">{project.description}</p>
                  <ul
                    className="mr-14 mt-3 flex flex-wrap gap-1.5 tracking-wide sm:gap-2"
                    aria-label="Technology stack"
                  >
                    {project.skills.map((skill) => (
                      <li
                        className="rounded-full bg-skeptic-700 px-3 py-1 text-xs text-skeptic-50"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center text-sm font-semibold text-skeptic-900 hover:text-skeptic-700"
          >
            Show More
            <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <section
        id="blog"
        className="mb-24 scroll-mt-16"
        aria-label="Recent blog posts"
      >
      </section>

      <footer className="flex flex-col items-start justify-between gap-y-6 sm:flex-row sm:items-end">
        <Link
          href="https://github.com/Nithin1729S"
          rel="noreferrer noopener"
          target="_blank"
          className="group text-skeptic-800 group-hover:text-skeptic-600"
        >
          <span>
            Illustrated, Designed & Built
            <br />
            by Nithin S
          </span>
          <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="https://nithin1729s.vercel.app/"
          rel="noreferrer noopener"
          target="_blank"
          className="group text-skeptic-800 group-hover:text-skeptic-600"
        >
          <span>Time Machine</span>
          <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </footer>
    </main>
  );
}
