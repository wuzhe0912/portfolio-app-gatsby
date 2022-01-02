import React from "react";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Seo from "../components/Seo";

const About = () => {
  const titleText = "About Me";

  return (
    <section className="section about-page fade-in">
      <Title title={titleText} />
      <div className="row">
        <div className="about-content"></div>
        <div className="about-img"></div>
      </div>
    </section>
  );
};

export default About;
