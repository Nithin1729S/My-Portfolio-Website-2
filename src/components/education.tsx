import React from "react";
import { cn } from "@/lib/utils";

interface DateRange {
  start: string;
  end: string;
}

interface EducationItem {
  title: string;
  company: string;
  link: string;
  location: string;
  date: DateRange;
  description: string | null;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
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
              // index === 0 && "after:bg-skeptic-700",
              // index === 1 && "after:bg-skeptic-700",
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
            {exp.description && (
              <div className="mt-3 text-skeptic-950">
                <p className="text-sm">{exp.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
