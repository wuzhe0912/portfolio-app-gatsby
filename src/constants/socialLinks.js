import React from "react"
import {
  FaGithub,
  FaLinkedin,
  // FaFacebookSquare,
} from "react-icons/fa"
import { SiHexo } from "react-icons/si"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/wuzhe0912",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <SiHexo className="social-icon"></SiHexo>,
    url: "https://pittwu-blog.netlify.app/",
  },
  // {
  //   id: 4,
  //   icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
  //   url: "",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
