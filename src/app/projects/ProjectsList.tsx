"use client";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
const projects = [
    {
      title: "AI Resume Insights",
      description: "An AI-driven resume feedback system built with Langchain and Gemini API. The system analyzes resumes and provides detailed feedback on content, structure, and formatting to help job seekers improve their applications.",
      thumbnail: "/assets/projects/tanitim.png",
      link: "https://your-project-link.com",
      skills: ["Langchain", "Gemini API", "Next.js", "AI"],
      wip: false
    },
    {
      title: "Sudoku Solver",
      description: "A FastAPI-Next.js project that extracts Sudoku puzzles from images and solves them using computer vision and backtracking algorithms. Upload a photo of any Sudoku puzzle and get the solution instantly.",
      thumbnail: "/assets/projects/tanitim.png",
      link: "https://your-sudoku-solver.com",
      skills: ["FastAPI", "Next.js", "Computer Vision", "Algorithms"],
      wip: true
    },
    {
      title: "Word Finder",
      description: "A Go + Next.js application to find possible words based on letter constraints. Perfect for word games and puzzles, this tool helps you discover valid words that match your specific criteria.",
      thumbnail: "/assets/projects/tanitim.png",
      link: "https://your-word-finder.com",
      skills: ["Go", "Next.js", "Word Games", "Algorithms"],
      wip: false
    },
    {
      title: "Portfolio Analytics",
      description: "A real-time dashboard for tracking portfolio performance across multiple asset classes. Built with Next.js and D3.js, featuring interactive charts and automated reporting.",
      thumbnail: "/assets/projects/tanitim.png",
      link: "https://your-analytics.com",
      skills: ["Next.js", "D3.js", "Financial Analytics", "Real-time Data"],
      wip: false
    },
    {
      title: "Recipe Manager",
      description: "A full-stack application for managing and sharing recipes. Features include ingredient scaling, meal planning, and automatic grocery list generation.",
      thumbnail: "/assets/projects/tanitim.png",
      link: "https://your-recipe-app.com",
      skills: ["Full-stack", "Next.js", "Meal Planning", "Recipe Management"],
      wip: false
    }
  ];

  const ProjectsList = () => {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="h-[calc(100vh-400px)] overflow-y-auto scrollbar-hide">
          <ul className="mt-4 ml-4 mr-4 mb-4 flex flex-col items-center gap-14 text-gray-900">
            {projects.map((project) => (
              <ProjectCard 
                key={project.title}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                link={project.link}
                skills={project.skills}
                wip={project.wip}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default ProjectsList;