import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import about from "../assets/about.png"
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
            Hello，我是 Pitt，一位持續在前端領域闖蕩的開發者，工作經歷上大多較側重在前台，但也持續在參與後台的開發。<br/>
            <br/>
            開發工具上，畢竟承接此前的工作經驗，JavaScript 仍以 Vue.js 為主，但近期開始督促自己摸索 React。<br />
            CSS 方面較習慣手刻 Flexbox 來掌握版面，但也會逐步摸熟一門 UI Framework，讓開發更為快速便捷。<br />
            HTML 則習慣使用模板語言 Pug。<br/>
            此外，因為對資料視覺化也蠻感興趣的，雖然之前工作處理上大多使採用 chart.js 相關套件，但仍會嘗試學習 D3.js。
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
