import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
  },
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
  },
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
  },
  {
    id: "1",
    userId: "1",
    name: "Job Seeker Website - Wihire",
    description: "Website untuk mencari pekerjaan",
    cover: "/images/projects/wihire.png",
    url: "https://wihire.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-white font-bold text-4xl mt-4 mb-8">My Project</h2>
      <div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            cover={project.cover}
            link={project.url}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
