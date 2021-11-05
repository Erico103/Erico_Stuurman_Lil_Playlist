import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <li>
        <Link to="Table">Song chooser</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </div>
  );
};

export default Header;
