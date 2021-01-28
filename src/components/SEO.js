import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
  return <Helmet htmlAttributes={{ lang: "zh-TW" }} title={title}>
    <meta name="description" content={description} />
  </Helmet>
}

export default SEO
