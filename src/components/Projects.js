import React, { useState } from 'react';
import Title from './Title';
import Project from './Project';
import { Link } from 'gatsby';

const Projects = ({ projectsData, title, isRecent, uniqueTagList }) => {
  const [tag, setTag] = useState('all');

  const filterTagData = projectsData.filter(item => {
    if (tag === 'all') return item;
    else {
      let result = [];
      return item.attributes.tags.forEach(subItem => {
        if (subItem.tag === tag) {
          result.push(item);
        }
      });
    }
  });
  filterTagData.reverse();
  console.log(2, filterTagData);

  return (
    <section className="section projects fade-in">
      <Title title={title} />
      {uniqueTagList && (
        <div className="projects-block projects-filter">
          <span className="filter-name">Filter By Tag</span>
          <select
            className="filter-select"
            value={tag}
            onChange={e => setTag(e.target.value)}
          >
            {uniqueTagList.map(uniqueTag => {
              return (
                <option
                  className="filter-option"
                  value={uniqueTag}
                  key={uniqueTag}
                >
                  {uniqueTag}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className="cards-wrapper">
        {filterTagData.map((project, index) => {
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
