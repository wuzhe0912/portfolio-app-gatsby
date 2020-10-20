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
            JS 框架：承接此前的工作經驗，仍以 Vue.js 為主要開發工具。<br />
            CSS：習慣 SCSS 結合 手刻 Flexbox 來掌握版面，但近期在嘗試摸索應用 Quasar。<br />
            HTML：習慣使用模板語言 Pug。<br/>
            資料視覺化：這是近期個人比較感興趣的方向，之前的工作採用 ECharts 這個套件來處理，但我也考慮加學 D3.js 來加以應用
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
