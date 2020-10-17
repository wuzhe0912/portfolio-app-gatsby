import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
// import Services from "../components/Services"
import Jobs from "../components/Jobs"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default () => {
  return <Layout>
    <SEO title="Pitt Wu Profile" description="This is Pitt Wu Profile Site" />
    <Hero />
    {/* <Services /> */}
    <Jobs />
  </Layout>
}
// ...GatsbyImageSharpFluid
