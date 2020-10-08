import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
// styles
import "../css/main.css"

const Layout = ({ children }) => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggleBtn={toggleBtn} />
      <Sidebar isOpen={isOpen} toggleBtn={toggleBtn} />
      { children }
      <Footer />
    </div>
  )
}

export default Layout
