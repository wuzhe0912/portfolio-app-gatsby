import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <div className="row">
        <div className="col-6"> try gatsby </div>
        <div className="col-6"> try gatsby </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
