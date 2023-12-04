import React from "react";
import Logo from "../img/logo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src={Logo} alt="" />
        <span>
          Made with ♥️ and <b>React.js</b>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
