"use client";
import React from "react";
import Link from "next/link";
import imageStyleTransfer from "@/assets/projects/imageStyleTransfer.png";
import airesume from "@/assets/projects/ai-resume.png";
import sudoku from "@/assets/projects/sudoku.png";
import ds from "@/assets/projects/ds.png";
import Arrow from "@/assets/icons/arrow.svg";
import Chat from "@/components/chat";
import ButtonGroup from "@/components/button-group";
import ExperienceSection from "./experience";
import EducationSection from "./education";
import ProjectsSection from "./projects";

const experience = [
  {
    title: "Software Engineer",
    logo: "assets/experience/google1.svg",
    company: "Google India",
    link: "https://drive.google.com/file/d/14Zy0gxOhisvAHLqrwU6NmIosM91Zi5Zh/view?usp=sharing",
    location: "Bengaluru, India",
    date: {
      start: "June 2026",
      end: "Present",
    },
    description:
      "Fine-tuned an LLM with distillation techniques to improve local ad targeting by matching user queries to relevant ads, and built a scalable data pipeline using optimized SQL for training data extraction. \n \n Integrated the model into low-latency ads serving stack and validated its effectiveness by deploying it in 1% Search Traffic, resulting in positive click-through rates.",
    skills: [
      "C++",
      "Python",
      "SQL",
      "Protocol Buffers",
      "Large Language Models",
      "Pipeline Design",
    ],
  },
  {
    title: "Software Engineer Intern",
    logo: "assets/experience/google1.svg",
    company: "Google India",
    link: "https://drive.google.com/file/d/14Zy0gxOhisvAHLqrwU6NmIosM91Zi5Zh/view?usp=sharing",
    location: "Bengaluru, India",
    date: {
      start: "May 2025",
      end: "August 2025",
    },
    description:
      "Fine-tuned an LLM with distillation techniques to improve local ad targeting by matching user queries to relevant ads, and built a scalable data pipeline using optimized SQL for training data extraction. \n \n Integrated the model into low-latency ads serving stack and validated its effectiveness by deploying it in 1% Search Traffic, resulting in positive click-through rates.",
    skills: [
      "C++",
      "Python",
      "SQL",
      "Protocol Buffers",
      "Large Language Models",
      "Pipeline Design",
    ],
  },
  // {
  //   title: "Executive Member",
  //   company: "ISTE NITK",
  //   link: "https://iste.nitk.ac.in/#/#/",
  //   location: "Mangalore, India",
  //   date: {
  //     start: "Dec 2022",
  //     end: "April 2025",
  //   },
  //   description:
  //     "Mentored over 50+ students under SMP'24 and Worked on 3 projects under Crypt SIG",
  //   skills: ["JavaScript", "TypeScript", "React", "Next.js", "Material UI"],
  // },
  // {
  //   title: "NLP Intern",
  //   company: "HALE Lab NITK",
  //   link: "halelabnitk.github.io",
  //   location: "Mangalore, India",
  //   date: {
  //     start: "April 2024",
  //     end: "July 2024",
  //   },
  //   description:
  //     "Trained a Natural Language Processing (NLP) model to interpret chest X-ray images and generate radiology reports by fine-tuning BioClinicalBERT and BioMedCLIP hugging face transformers",
  //   skills: ["Natural Language Processing", "PyTorch", "Python", "Streamlit"],
  // },
  // {
  //   title: "Student Member",
  //   company: "IEEE NITK",
  //   link: "https://ieee.nitk.ac.in/",
  //   location: "Mangalore, India",
  //   date: {
  //     start: "Nov 2022",
  //     end: "July 2023",
  //   },
  //   description:
  //     "Involved in a project that aims to simulate a Robotic arm using the Robot Operating System (ROS).",
  //   skills: ["PyTorch", "Tkinter", "ROS"],
  // },
];
const education = [
  {
    title: "National Institute of Technology Karnataka",
    company: "B.Tech in Information Technology with Minor in Machine Learning",
    link: "https://iste.nitk.ac.in/#/#/",
    location: "Mangalore, India",
    date: {
      start: "Nov 2022",
      end: "May 2026",
    },
    description: "Grade: 9.39/10",
  },
];

const projects = [
  {
    title: "Image Style Transfer Using CNNs",
    link: "https://github.com/Nithin1729S/Image-Style-Transfer-Using-CNNs.git",
    thumbnail: imageStyleTransfer,
    description:
      "A Flask application that uses neural style transfer to blend content and style images effortlessly",
    skills: ["Pytorch", "CNN", "Flask", "Python"],
    wip: false,
  },
  {
    title: "AI Resume Insights",
    link: "https://github.com/Nithin1729S/AI-Resume-Insights",
    thumbnail: airesume,
    description:
      "An AI-driven resume feedback system built with Langchain and Gemini API.",
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
    description:
      "This project is a distributed file storage system implemented in Go.",
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
          I’m a Software Engineer at <strong>Google India</strong> working on local search ads.
        </p>
        <p className="mt-3 text-skeptic-900">
          I graduated in 2026 with a B.Tech in Information Technology from <strong>NITK Surathkal</strong>.
        </p>
        {/* <p className="mt-3 text-skeptic-900">
          Comfortable with C, C++, Python. Into building real solutions in
          Software Dev, ML/DL, NLP, Blockchain, and Data Analytics. Love
          tackling challenges that actually get stuff done.
        </p> */}
        <ButtonGroup />
      </section>

      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <ProjectsSection projects={projects} />

      <footer className="flex flex-col items-start justify-between gap-y-6 sm:flex-row sm:items-end">
        <span>Copyright {new Date().getFullYear()}</span>
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
