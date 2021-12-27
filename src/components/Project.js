import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { Link } from "gatsby";

const Project = ({ attributes }) => {
  const { description, image_url, github } = attributes;

  return <article className="single-card">single project component</article>;
};

export default Project;
