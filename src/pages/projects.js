import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import ProjectList from "../constants/project-list"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  // build tag list
  const tagList = ProjectList.map(node => {
    return node.tag;
  });
  tagList.unshift('all');
  // select tag
  const [selectTag, setSelectTag] = React.useState('all');
  // filter project list
  let filterList = [];
  ProjectList.forEach((node) => {
    if (selectTag === 'all') {
      let target = node.list;
      target.forEach((subNode) => {
        filterList.push(subNode);
      })
    } else if (selectTag === node.tag) {
      filterList = node.list;
    }
  })

  return <Layout>
    <section className="blog-page bg-grey blog-wrap">
      <Title title="All Projects" />
      {/* tag */}
      <div className="tag-wrap">
        <div className="tag-container">
          {
            tagList.map((node, index) => {
              return <button
                        key={index}
                        onClick={() => setSelectTag(node)}
                        className="tag-list btn"
                      >
                {node}
              </button>
            })
          }
        </div>
      </div>
      {/* project */}
      <article className="project-wrap">
        {
          filterList.map((node, index) => {
            const { title, desc, tags, github, link } = node;
            return <div key={index} className="project-card">
              <h4>{title}</h4>
              <p>{desc}</p>
              <div className="about-stack">
                {
                  tags.map((node, index) => {
                    return <span key={index}>{node}</span>
                  })
                }
              </div>
              <div className="project-links links-wrap">
                <a href={github} target="_blank">
                  <FaGithubSquare className="project-icon" />
                </a>
                <a href={link} target="_blank">
                  <FaShareSquare className="project-icon" />
                </a>
              </div>
            </div>
          })
        }
      </article>
      <div className="project-btn-wrap">
        <Link to="/" className="btn">Back Home</Link>
      </div>
    </section>
  </Layout>
}

export default ProjectsPage
