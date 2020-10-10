import React from "react"
import {
  FaGithub,
  FaLinkedin,
  // FaFacebookSquare,
} from "react-icons/fa"
import { SiHexo } from "react-icons/si"
import { AiOutlineFileMarkdown } from "react-icons/ai"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/wuzhe0912",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/pitt-wu-17ab03b4/",
  },
  {
    id: 3,
    icon: <AiOutlineFileMarkdown className="social-icon"></AiOutlineFileMarkdown>,
    url: "https://docsify-pitt.netlify.app/",
  },
  {
    id: 4,
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
      <a href={link.url} target="_blank" className="social-link">
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
