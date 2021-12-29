import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";

const Projects = ({ projectsData, title, isRecent }) => {
  return (
    <section className="section projects fade-in">
      <Title title={title} />
      <div className="cards-wrapper">
        {projectsData.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
      {isRecent && (
        <Link to="/projects" className="btn center-btn">
          more projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
