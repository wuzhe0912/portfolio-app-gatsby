import React from "react";
import socialLinks from "../constants/social_links";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map((link, index) => {
            return (
              <a
                className="social-link"
                href={link.url}
                key={`${index}-${link.text}`}
                target="_blank"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
        <h4>
          Copyright &copy; 2017 - {new Date().getFullYear()} by
          <span> Pitt Wu </span>
          Built with Gatsby.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
