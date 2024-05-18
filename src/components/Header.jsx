import React from "react";
import logo from "../assets/images/logo.svg";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Ping" />
    </header>
  );
};

export default Header;
