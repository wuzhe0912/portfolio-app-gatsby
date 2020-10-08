import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "gatsby"
import experience from "../constants/experience"
// import { graphql, useStaticQuery } from "gatsby"

const Jobs = () => {
  const [value, setValue] = React.useState(0);
  const list = experience;
  const { position, location, date, desc } = list[value];

  return <section className="section jobs bg-grey">
    <Title title="experience" />
    <div className="jobs-center">
      {/* btn wrap */}
      <div className="btn-container">
        {list.map((node, index) => {
          return <button
                    key={node.id}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                  >
            {node.company}
          </button>
        })}
      </div>
      {/* info */}
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{location}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((node) => {
            return <div key={node.textId} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{node.text}</p>
            </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      More Info
    </Link>
  </section>
}

export default Jobs
