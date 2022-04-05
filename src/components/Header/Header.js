import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>ITEGRAFLIX</h1>
      </Link>
    </div>
  );
};

export default Header;
