import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav-logo">
        <img src={logo} alt="logo" />
      </span>
      <div className="dapp">
        <div className="price">
          <h2>$10.49</h2>
        </div>
        <a href="#" class="myButton">
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default Navbar;
