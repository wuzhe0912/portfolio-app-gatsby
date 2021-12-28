import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
// import Services from "../components/Services";
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
            demo
          }
        }
      }
      totalCount
    }
  }
`;

const IndexPage = ({
  data: {
    allStrapiProject: { nodes },
  },
}) => {
  const formData = nodes[0].data;
  const recentProjectData = formData.filter(item => {
    return item.attributes.recent;
  });

  return (
    <>
      <main>
        <Hero />
        <Jobs />
        {/* <Services /> */}
        <Projects
          title="Recent Projects"
          isRecent
          projectsData={recentProjectData}
        />
      </main>
    </>
  );
};

export default IndexPage;
