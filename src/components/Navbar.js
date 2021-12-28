import React from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../constants/links";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Pitt Wu's website logo" />
          </Link>
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
