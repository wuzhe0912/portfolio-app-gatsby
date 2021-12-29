import React, { useState } from "react";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import Seo from "../components/Seo";

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        data {
          id
          attributes {
            description
            github
            image_url
            recent
            site
            tags {
              id
              tag
            }
            title
            slug
            demo
          }
        }
      }
      totalCount
    }
  }
`;

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes },
  },
}) => {
  const formData = nodes[0].data;
  let fliterData = formData;

  const [projects, setProjects] = useState(true);

  fliterData = fliterData.filter(item => {
    if (projects) {
      return !item.attributes.demo;
    } else return item.attributes.demo;
  });

  return (
    <>
      <main>
        <section className="projects-page">
          <div className="projects-tab">
            <span className="view-btn" onClick={() => setProjects(true)}>
              View Projects
            </span>
            <span className="view-btn" onClick={() => setProjects(false)}>
              View Demos
            </span>
          </div>
          <Projects
            title={projects ? "All Projects" : "All Demos"}
            projectsData={fliterData}
          />
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
