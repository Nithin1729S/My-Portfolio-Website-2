"use client";

import Footer from "./Footer";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsList from "./ProjectsList";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ProjectsHeader />
        <ProjectsList />
      </main>
      <Footer />
    </div>
  );
}