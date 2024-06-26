import React from "react";
import { placeholder1 } from "../../assets/index";
import Title from "../home/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          <ProjectCard
            title="Starbhak Mart"
            category="E-Commerce"
            image={placeholder1}
          />
          <ProjectCard
            title="E-Library"
            category="Website"
            image={placeholder1}
          />
        </div>
        <div className="px-6">
          <ProjectCard
            title="Weather App"
            category="Mobile Application"
            image={placeholder1}
          />
          <ProjectCard
            title="Chatting App"
            category="Mobile Application"
            image={placeholder1}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
