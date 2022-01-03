import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Projects from '../components/Projects';
import Seo from '../components/Seo';

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

  const [status, setStatus] = useState('projects');

  // check for selecte projects or demos
  const btnList = [
    { uid: 'projects', name: 'View Projects' },
    { uid: 'demos', name: 'View Demos' },
  ];

  fliterData = fliterData.filter(item => {
    if (status === 'demos') {
      return item.attributes.demo;
    } else return !item.attributes.demo;
  });

  // check selecte tag
  let tagList = [];
  tagList.push('all');
  fliterData.forEach(item => {
    item.attributes.tags.forEach(subItem => {
      tagList.push(subItem.tag);
    });
  });
  const uniqueTagList = [...new Set(tagList)];

  return (
    <>
      <main>
        <section className="projects-page fade-in">
          <div className="projects-block projects-tab">
            {btnList.map((item, index) => {
              return (
                <span
                  className={`view-btn ${
                    item.uid === status ? 'view-btn-active' : ''
                  }`}
                  key={index}
                  onClick={() => setStatus(item.uid)}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
          <Projects
            title={status === 'projects' ? 'All Projects' : 'All Demos'}
            projectsData={fliterData}
            uniqueTagList={uniqueTagList}
          />
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
