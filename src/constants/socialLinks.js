import React from "react"
import {
  FaGithub,
  FaLinkedin,
  // FaFacebookSquare,
} from "react-icons/fa"
import { ImProfile } from "react-icons/im"
import { AiFillFileMarkdown } from "react-icons/ai"

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
    icon: <ImProfile className="social-icon"></ImProfile>,
    url: "https://www.cakeresume.com/pittwu",
  },
  {
    id: 4,
    icon: <AiFillFileMarkdown className="social-icon"></AiFillFileMarkdown>,
    url: "https://docsify-pitt.netlify.app/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" rel="noreferrer noopener" className="social-link">
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
