import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaPencilAlt,
  FaFacebookSquare,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: `https://github.com/wuzhe0912`,
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/pitt-wu",
  },
  {
    id: 3,
    icon: <FaPencilAlt className="social-icon"></FaPencilAlt>,
    url: "https://docusaurus-pitt-blog.vercel.app/",
  },
  {
    id: 4,
    icon: (
      <BsFillPersonLinesFill className="social-icon"></BsFillPersonLinesFill>
    ),
    url: "",
  },
  {
    id: 5,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/wuzhe0912",
  },
];

export default data;
