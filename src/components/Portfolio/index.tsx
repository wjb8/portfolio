import React from "react";
import { PortfolioProps } from "../../../types/types";

const Portfolio = (props: PortfolioProps) => {
  return (
    <div>
      <h1>Portfolio</h1>
      {props.data.projects &&
        props.data.projects.map((project) => (
          <div key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>See it live</a>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
