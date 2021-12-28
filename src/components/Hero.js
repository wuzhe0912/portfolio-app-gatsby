import React from "react";
import { Link } from "gatsby";
import socialLinks from "../constants/social_links";
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            {/* <h1>I'm Pitt</h1> */}
            <h1>WebDev</h1>
            <h4>Fronted Developer</h4>
            <div className="social-links">
              {socialLinks.map((socialLink, index) => {
                return (
                  <a
                    href={socialLink.url}
                    key={`${index}-${socialLink.text}`}
                    className="social-link"
                    target="_blank"
                  >
                    {socialLink.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
};

export default Hero;
