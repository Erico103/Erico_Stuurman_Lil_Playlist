import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: darkblue;
  text-decoration: none;
  margin: 1rem;
  font-size: 30px;
`;

const Header = () => {
  return (
    <div className="header">
      <li>
        <StyledLink to="Table" ClassName="active-link">
          Song chooser
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/About" style={{ textDecoration: "none" }}>
          About
        </StyledLink>
      </li>
    </div>
  );
};

export default Header;
