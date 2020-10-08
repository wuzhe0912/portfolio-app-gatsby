import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({toggleBtn}) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img className="nav-logo" src={logo} alt="logo" />
        <button type="button" className="toggle-btn" onClick={toggleBtn}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
