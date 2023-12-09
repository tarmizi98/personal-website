"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    tag: ["All", "Web"],
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
    gitUrl: "/",
  },
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    tag: ["All", "Web"],
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
    gitUrl: "/",
  },
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    tag: ["All"],
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
    gitUrl: "/",
  },
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    tag: ["All"],
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
    gitUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className="text-center text-white font-bold text-4xl mt-4 mb-8">
        My Project
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            cover={project.cover}
            link={project.url}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
