import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <span>
          <Link to="/"> Estatery</Link>
        </span>
        <span className="open"><a href="/" target="_blank" rel="noreferrer">Rent</a></span>
        <span><a href="/" target="_blank" rel="noreferrer">Buy</a></span>
        <span><a href="/" target="_blank" rel="noreferrer">Sell</a></span>
        <span><a href="/" target="_blank" rel="noreferrer">Manage Property</a></span>
        <span><a href="/" target="_blank" rel="noreferrer">Resources</a></span>
      </div>
      
    </div>
  );
}

export default Header;