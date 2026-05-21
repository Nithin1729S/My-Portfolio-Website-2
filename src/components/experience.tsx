import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/assets/icons/arrow.svg";
import { cn } from "@/lib/utils";

interface DateRange {
  start: string;
  end: string;
}

interface ExperienceItem {
  title: string;
  logo: string;
  company: string;
  link: string;
  location: string;
  date: DateRange;
  description: string;
  skills: string[];
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="mb-24 scroll-mt-16"
      aria-label="Professional work experience"
    >
      <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
      <ul className="ml-1 mt-5 flex flex-col text-skeptic-900">
        {experience.map((exp, index) => (
          <li
            key={index}
            className={cn(
              "relative ml-3 pl-5 before:absolute before:-left-2 before:top-2 before:h-full before:w-0.5 before:rounded-full before:bg-slate-300 before:content-[''] after:absolute after:-left-[0.93rem] after:top-1 after:size-4 after:rounded-full after:bg-slate-300 after:content-['']",
              index !== experience.length - 1 && "pb-10",
              index === 0 && "after:bg-skeptic-700",
            )}
          >
            <div className="flex flex-col-reverse justify-between gap-y-2 sm:flex-row">
              <h3 className="relative flex items-start gap-3 leading-snug">
                <div className="flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={38}
                    height={28}
                    className="rounded object-contain"
                  />
                </div>
                <div className="flex flex-col">
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
                </div>
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
              <p className="whitespace-pre-line text-sm">{exp.description}</p>
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
  );
}
