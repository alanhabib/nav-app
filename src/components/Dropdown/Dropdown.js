import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const subItems = [
  {
    title: "React.js",
    path: "/react",
    cName: "dropdown-link",
  },
  {
    title: "Vue.js",
    path: "/vue",
    cName: "dropdown-link",
  },
  {
    title: "Angular",
    path: "/angular",
    cName: "dropdown-link",
  },
  {
    title: "C#",
    path: "/c#",
    cName: "dropdown-link",
  },
];

const DropdownMenu = styled.ul`
  background-color: #5cabff;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
  display: ${(props) => (props.clicked ? "none" : "")};
`;

const DropdownLink = styled(Link)`
  background: #5cabff;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;

  &:hover {
    background: #1888ff;
    transition: all 0.5s linear;
  }
`;
function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <DropdownMenu clicked={click} onClick={handleClick}>
      {subItems.map((item, index) => {
        return (
          <DropdownLink
            key={index}
            to={item.path}
            onClick={() => setClick(false)}
          >
            {item.title}
          </DropdownLink>
        );
      })}
    </DropdownMenu>
  );
}

export default Dropdown;
