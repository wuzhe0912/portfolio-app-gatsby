import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";

const Projects = ({ projectsData, title, showLink }) => {
  console.log(12, projectsData);

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projectsData.map(project => {
          return <Project key={project.id}></Project>;
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          more projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
