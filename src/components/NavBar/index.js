import logo from "../../logo.svg";
import React, { useEffect, useState } from "react";
import {
  Nav,
  NavBarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElements";

import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";

const navLinks = [
  {
    title: "Programming",
    path: "programming",
  },
  {
    title: "Design",
    path: "design",
  },
];
const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">
          <img src={logo} width="80px" className="App-logo" alt="logo" />
        </NavLogo>
        <NavMenu>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLinks
                to="/programming"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Programming
              </NavLinks>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLinks
                to="/design"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Design <i className="fas fa-caret-down" />
              </NavLinks>
              {dropdown && <Dropdown />}
            </li>
          </ul>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBar;
