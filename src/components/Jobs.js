import React, { useState } from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const query = graphql`
  {
    allStrapiJob {
      nodes {
        data {
          id
          attributes {
            company
            date
            location
            desc {
              id
              text
            }
          }
        }
      }
    }
  }
`;

const Jobs = () => {
  const { allStrapiJob } = useStaticQuery(query);
  const { nodes } = allStrapiJob;
  const { data } = nodes[0];
  const [value, setValue] = useState(0);
  const { company, location, date, desc } = data[value].attributes;

  return (
    <section className="section jobs">
      <Title title="experience"></Title>
      <div className="jobs-center">
        {/* company name list */}
        <div className="btn-container">
          {data.map((data, index) => {
            return (
              <button
                key={data.id}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {data.attributes.company}
              </button>
            );
          })}
        </div>
        {/* jobs info */}
        <article className="job-info">
          <h3>{company}</h3>
          <h4>{location}</h4>
          <p className="job-date">{date}</p>
          {desc.map(desc => {
            return (
              <div key={desc.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{desc.text}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  );
};

export default Jobs;
