import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Projects from '../components/Projects';
import Tags from '../components/Tags';
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
  let filterData = formData;

  const [projects, setProjects] = useState('projects');
  const [tag, setTag] = useState('all');
  const [filterTagData, setFilterTagData] = useState([]);

  // 1.1 build project & demo list
  const btnList = [
    { uid: 'projects', name: 'View Projects' },
    { uid: 'demos', name: 'View Demos' },
  ];

  // 1.2 use project or demo to filter list
  filterData = filterData.filter(item => {
    if (projects === 'demos') {
      return item.attributes.demo;
    } else return !item.attributes.demo;
  });
  filterData.reverse();

  // 2.1 build tags list
  let tagList = [];
  tagList.push('all');
  filterData.forEach(item => {
    item.attributes.tags.forEach(subItem => {
      tagList.push(subItem.tag);
    });
  });
  const uniqueTagList = [...new Set(tagList)];

  // 2.2 listen tag change and use selected tag to filter list
  useEffect(() => {
    if (tag !== 'all') {
      let filterTag = [];
      filterData.forEach(item => {
        item.attributes.tags.forEach(subItem => {
          if (subItem.tag === tag) {
            filterTag.push(item);
          }
        });
      });
      setFilterTagData(filterTag);
    } else {
      setFilterTagData([]);
    }
  }, [tag, projects]);

  return (
    <>
      <main>
        <section className="projects-page fade-in">
          <div className="projects-block projects-tab">
            {btnList.map((item, index) => {
              return (
                <span
                  className={`view-btn ${
                    item.uid === projects ? 'view-btn-active' : ''
                  }`}
                  key={index}
                  onClick={() => setProjects(item.uid)}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
          <Tags
            projects={projects}
            filterTag={tag => setTag(tag)}
            uniqueTagList={uniqueTagList}
          />
          <Projects
            title={projects === 'projects' ? 'All Projects' : 'All Demos'}
            projectsData={filterTagData.length > 0 ? filterTagData : filterData}
            uniqueTagList={uniqueTagList}
          />
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
