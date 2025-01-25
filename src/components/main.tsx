import React from "react";

import Link from "next/link";
import Image from "next/image";

import BlogPosts from "@/components/blog-posts";
import { cn } from "@/lib/utils";

import tanitim from "@/assets/projects/tanitim.png";
import Arrow from "@/assets/icons/arrow.svg";
import Chat from "@/components/chat";
import ButtonGroup from "@/components/button-group";

const experience = [
  {
    title: "Executive Member",
    company: "ISTE NITK",
    link: "https://iste.nitk.ac.in/#/#/",
    location: "Mangalore, India",
    date: {
      start: "Dec 2022",
      end: "Present",
    },
    description:
      "Mentored over 50+ students under SMP'24 and Worked on 2 projects under Crypt SIG",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Material UI",
    ],
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
    skills: [
      "Natural Language Processing","PyTorch", "Python", "Streamlit"
    ],
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
    skills: [
      "PyTorch", "Tkinter", "ROS"
    ],
  },
];

const projects = [
  {
    title: "Image Style Transfer",
    link: "#",
    thumbnail: tanitim,
    description:
      "wegeherherh",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Next UI",
      "Framer Motion",
    ],
  },
];

export default function Main() {
  return (
    <main className="pb-10 pt-24 text-skeptic-800 md:pb-16 lg:max-w-prose lg:py-16">
      <Chat />

      <section id="about" className="mb-24 scroll-mt-16" aria-label="About me">
        <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
        <p className="mt-5 text-skeptic-900">
          As a 3rd year undergraduate at the <strong>National Institute of Technology,
          Karnataka</strong>, I&apos;m passionate about the ever-evolving world of technology.
          Currently pursuing Bachelor&apos;s in Information Technology and minors in
          Machine Learning, I&apos;m on a journey to explore the endless
          possibilities that technology offers. 
        </p>
        <p className="mt-3 text-skeptic-900">
          With a deep fascination for
          emerging tech trends and their impact on our daily lives, I'm
          dedicated to staying at the forefront of innovation and contributing
          to the tech ecosystem. 
        </p>
        <p className="mt-3 text-skeptic-900">
          I am proficient in C, C++ and Python with a
          strong hold on Data Structures and Algorithms. My areas of interest
          include Software Development, Machine Learning, Deep Learning, Data
          Analytics, NLP, Blockchain and Database Management Systems. I am a
          keen learner, handworker and a good problem solver with a strong work
          ethic. I have done several projects in the field of Web Development,
          Machine Learning, Deep Learning, NLP and Blockchain.
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
        id="projects"
        className="mb-24 scroll-mt-16"
        aria-label="Projects I've worked on"
      >
        <h2 className="text-2xl font-bold tracking-tight">
          Some Things I&apos;ve Built
        </h2>
        <ul className="mt-8 flex flex-col gap-14 text-skeptic-900">
          {projects.map((project) => (
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
      </section>

      <section
        id="blog"
        className="mb-24 scroll-mt-16"
        aria-label="Recent blog posts"
      >
        <BlogPosts />
      </section>

      <footer className="flex flex-col items-start justify-between gap-y-6 sm:flex-row sm:items-end">
        <Link
          href="https://github.com/Nithin1729S/My-Portfolio-Website---2"
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
          href="https://nithins.vercel.app/"
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
