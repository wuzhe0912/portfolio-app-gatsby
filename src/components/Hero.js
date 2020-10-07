import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
    {
      file(relativePath: {eq: "me.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`

const Hero = () => {
  const { file: {
    childImageSharp: { fluid }
  } } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>Hi! I'm Pitt</h1>
          <h4>a Frontend Developer based in Taiwan.</h4>
          <Link to="/projects/" className="btn">
            Projects
          </Link>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
