import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_search } from "react-icons-kit/md/ic_search";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 50px;
  padding: 0px 50px;
  z-index: 10;
  /* box-shadow: 0px 10px 20px 10px rgba(20, 20, 20, 1); */
  @media (max-width: 820px) {
    padding: 0px 20px;
  }
`;

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 100px 1fr;
`;

const Item = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => (props.current ? "#999" : "#222")};
  transition: color 0.5s ease-in-out;
  &:hover {
    color: #ddd;
  }
`;

const IconBox = styled.div`
  grid-column: 3;
  place-self: end;
  width: 24px;
  height: 50px;
  color: ${props => (props.current ? "#999" : "#222")};
  transition: color 0.5s ease-in-out;
  &:hover {
    color: #ddd;
  }
`;

const Center = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) =>
  pathname !== "/${id}/video" ? (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <IconBox current={pathname === "/search"}>
          <Center to="/search">
            <Icon icon={ic_search} size={"24"} />
          </Center>
        </IconBox>
      </List>
    </Header>
  ) : null
);
