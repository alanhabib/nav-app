import styled from "styled-components";
import { NavLink, Switch } from "react-router-dom";
import routes from "../Routes";
import RouteWithSubRoutes from "../../utils/RouteWithSubRoutes";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f5fa;
  box-sizing: border-box;
  width: 250px;
  height: 100vh;
  padding: 18px;
`;

const LinkR = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20;
  font-weight: 700;
`;

const Tree = () => {
  return (
    <SideBarContainer>
      <LinkR activeStyle={{ color: "lightblue" }} to="/home">
        Home
      </LinkR>
      <LinkR activeStyle={{ color: "lightblue" }} to="/about">
        About
      </LinkR>
      <>
        <Switch>
          {routes?.map((route: any, i: number) => {
            return <RouteWithSubRoutes key={i} {...route} />;
          })}
        </Switch>
      </>
    </SideBarContainer>
  );
};

export default Tree;
