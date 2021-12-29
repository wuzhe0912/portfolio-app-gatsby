import React from "react";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Project = ({ attributes }) => {
  const { description, image_url, github, site, tags, title } = attributes;

  return (
    <article className="single-card fade-in card-border">
      <div className="card-img-wrapper">
        <img src={image_url} alt={description} className="card-img-fit" />
      </div>
      <div className="card-text-wrapper">
        <a href={site} className="site-icon" target="_blank">
          <FaShareSquare />
        </a>
        <div className="text-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="text-tags">
            {tags.map(tags => {
              return <p key={`${tags.id}${tags.tag}`}>{tags.tag}</p>;
            })}
          </div>
        </div>
        <div className="text-footer">
          <a href={github} className="github-icon" target="_blank">
            Source Code
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
