import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import about from "../assets/about.jpg"
import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import Image from "gatsby-image"
// ...GatsbyImageSharpFluid

const About = () => {
  const list = ['html', 'css', 'javascript', 'vue.js'];

  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <img className="about-img personal-img" src={about} alt="about" />
        <article className="about-text">
          <Title title="About Me" />
          <p>
            Hello，我是 Pitt，一位持續在前端領域闖蕩的開發者，在開發上喜歡使用 Pug > HTML，CSS 熟悉手刻，但正在嘗試
            應用 Tailwind CSS，JS 走的路線是 Vue，因此這幾年仍會以 Vue 為主要開發工具，但也不定時在學習 React (但客觀的說，對 JSX 不太上手)。
            另外，近期希望自己能在資料視覺化上有所耕耘，因此也在逐步摸索 D3.js。
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
