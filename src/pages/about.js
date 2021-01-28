import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import about from "../assets/about.png"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import Image from "gatsby-image"
// ...GatsbyImageSharpFluid

const About = () => {
  const list = ['pug', 'scss', 'javascript', 'vue.js', 'node.js'];

  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <img className="about-img personal-img" src={about} alt="about" />
        <article className="about-text">
          <Title title="About Me" />
          <p>
            個人簡歷重新施工ing...
          </p>
          <div className="about-stack">
            {
              list.map((node, index) => {
                return <span key={index}>{node}</span>
              })
            }
          </div>
          <Link to="/" className="btn center-btn">
            Back Home
          </Link>
        </article>
      </div>
    </section>
  </Layout>
}

export default About
