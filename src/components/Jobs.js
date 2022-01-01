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
            title
            date
            location
            recent
            related
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
  const recentJobsData = data.filter(item => {
    if (item.attributes.recent & item.attributes.related) {
      return item;
    }
  });
  recentJobsData.reverse();

  const [value, setValue] = useState(0);
  const { title, location, date, desc } = recentJobsData[value].attributes;

  return (
    <section className="section jobs">
      <Title title="experience"></Title>
      <div className="jobs-center">
        {/* company name list */}
        <div className="btn-container">
          {recentJobsData.map((data, index) => {
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
          <h3>{title}</h3>
          <h4>{location}</h4>
          <p className="job-date">{date}</p>
          {desc.map(desc => {
            return (
              <div key={desc.id} className="job-desc fade-in">
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
