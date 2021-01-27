import React from "react";

import Logo from "../../assets/logo.png";
import "./Footer.css";

const footer = () => {
  return (
    <div className="Footer">
      <p>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        Copyright &copy; 2020, Roberto Lazcano
        <img src={Logo} alt=" cannot be found" />
        
      </p>
    </div>
  );
};

export default footer;
