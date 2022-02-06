import React from 'react';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  const titleText = 'About Me';

  return (
    <section className="section about-page fade-in">
      <Title title={titleText} />
      <div className="row">
        <div className="about-content"></div>
        <div className="about-img-wrpper">
          <StaticImage
            src="../assets/images/about.png"
            className="about-img"
            alt="about image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
