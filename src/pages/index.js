import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
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
          }
        }
      }
      totalCount
    }
  }
`;

const IndexPage = ({ data }) => {
  const { allStrapiProject } = data;
  const { nodes } = allStrapiProject;
  const projectsData = nodes[0].data;

  return (
    <>
      <main>
        <Hero />
        <Jobs />
        {/* <Services /> */}
        <Projects
          title="Recent Projects"
          showLink
          projectsData={projectsData}
        />
      </main>
    </>
  );
};

export default IndexPage;
