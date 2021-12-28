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

  if (!projects) {
    fliterData = fliterData.filter(node => {
      return item.attributes.demo;
    });
  } else {
  }

  return (
    <>
      <main>
        <section className="projects-page">
          <div className="projects-tab">
            <span onClick={() => setProjects(true)}>Projects</span>
            <span onClick={() => setProjects(false)}>Demos</span>
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
