import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Arrow from "@/assets/icons/arrow.svg";

interface ProjectItem {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  skills: string[];
  wip: boolean;
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="mb-24 scroll-mt-16"
      aria-label="Projects I've worked on"
    >
      <h2 className="text-2xl font-bold tracking-tight">
        Some Things I&apos;ve Built
      </h2>
      <ul className="mt-8 flex flex-col gap-14 text-skeptic-900">
        {projects.slice(0, 4).map((project) => (
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
                height={120}
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
          className="group flex items-center text-sm  text-skeptic-900 hover:text-skeptic-700"
        >
          Show More
          <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
