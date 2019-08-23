import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  background-color: rgba(20, 20, 20, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  z-index: 10;
  box-shadow: 0px 10px 20px 10px rgba(20, 20, 20, 1);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${props => (props.current ? "#fff" : "#222")};
  /* border-bottom: 5px solid
    ${props => (props.current ? "#3498db" : "transparent")}; */
  transition: color 0.5s ease-in-out;
  &:nth-child(2){
    margin: 0 5vw;
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
