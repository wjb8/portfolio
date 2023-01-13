import React from "react";
import { ResumeProps, PortfolioProps, HomeProps } from "../../../types/types";

const Home = (props: HomeProps) => {
  const { resumeData, portfolioData } = props;

  const { projects } = portfolioData.data;
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Resume</h2>
      </div>
      <div>
        <h2>Recent Projects</h2>
        {projects &&
          projects.map((project) => (
            <div key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>See it live</a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
