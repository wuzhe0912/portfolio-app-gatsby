import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
// styles
import "../assets/styles/main.scss";

const Layout = ({ children }) => {
  const circleList = [1, 2, 3, 4];

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-circles">
        {circleList.map(number => {
          return <div className={`circle-${number}`} key={number}></div>;
        })}
      </div>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
