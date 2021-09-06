import React from "react";
import { Link, Switch } from "react-router-dom";
import styled from "styled-components";
import RouteWithSubRoutes from "../utils/RouteWithSubRoutes";

const Home = ({ routes }) => {
  const menu = [
    {
      path: "/home/page1", // the url
      name: "Page1", // name that appear in Sidebar
    },
    {
      path: "/home/page2",
      name: "Page2",
    },
  ];

  return (
    <>
      <h2>React Nested Routes</h2>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.name}>
            <Link to={menuItem.path}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </>
  );
};

export default Home;
