import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";

const Projects = ({ projectsData, title, showLink }) => {
  const formData = projectsData.filter(item => {
    return item.attributes.recent;
  });

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="cards-wrapper">
        {formData.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
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
