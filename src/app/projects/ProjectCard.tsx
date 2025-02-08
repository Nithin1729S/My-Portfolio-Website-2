"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Arrow from "@/assets/icons/arrow.svg";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  skills: string[];
  wip?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  thumbnail, 
  link, 
  skills,
  wip = false 
}) => {
  return (
    <li className="group relative z-0 flex flex-col gap-4 sm:flex-row mt-3 ">
      <div
        className="absolute inset-0 -z-10 hidden rounded-3xl transition-all  motion-reduce:transition-none lg:block lg:group-hover:-inset-5 lg:group-hover:bg-skeptic-200"
        aria-hidden="true"
      />
      <div className="relative size-fit flex-shrink-0 rounded">
        {wip && (
          <div
           className="absolute inset-0 z-10 flex size-full items-center justify-center rounded bg-opacity-50 bg-wip-overlay text-xl font-bold tracking-wider text-skeptic-50 transition-all lg:group-hover:opacity-0"
            aria-label="Work in progress"
          >
            &mdash; WIP &mdash;
          </div>
        )}
        <Image
          src={thumbnail}
          alt={title}
          width={140}
          height={90} // Add required height property
          quality={100}
          className="relative rounded border border-skeptic-400"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold leading-none">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            // className="relative inline-block"
          >
            <span>{title}</span>
            <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[4px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

            <span
              className="absolute -inset-x-4 -inset-y-2.5 z-20 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
              aria-hidden="true"
            />
          </Link>
        </h3>
        <div className="mt-3 text-gray-950">
          <p className="text-sm">{description}</p>
          <ul
            className="mr-14 mt-3 flex flex-wrap gap-1.5 tracking-wide sm:gap-2"
            aria-label="Technology stack"
          >
            {skills.map((skill) => (
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
  );
};

export default ProjectCard;