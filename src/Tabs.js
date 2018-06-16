import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const MenuTabs = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  a {
    text-decoration: none;
    &.active {
      border-bottom: 4px solid #1da1f2;
      li > :nth-child(2) {
        color: #1da1f2;
      }
    }
  }
`;
const Tab = styled.li`
  display: block;
  padding: 8px 20px 6px 20px;
  text-align: center;
`;

const Text = styled.span`
  color: #707e88;
  font-size: ${props => (props.quantity ? "18px" : "12px")};
  line-height: 21px;
  font-weight: bold;
  display: block;
`;

const Tabs = () => {
  return (
    <Router>
      <MenuTabs>
        <NavLink to="/EveryInteraction" exact>
          <Tab>
            <Text>Tweets</Text>
            <Text quantity active>
              8,058
            </Text>
          </Tab>
        </NavLink>
        <NavLink to="/EveryInteraction/Following" exact>
          <Tab>
            <Text>Following</Text>
            <Text quantity>721</Text>
          </Tab>
        </NavLink>
        <NavLink to="/EveryInteraction/Followers" exact>
          <Tab>
            <Text>Followers</Text>
            <Text quantity>1,815</Text>
          </Tab>
        </NavLink>
        <NavLink to="/EveryInteraction/Likes" exact>
          <Tab>
            <Text>Likes</Text>
            <Text quantity>460</Text>
          </Tab>
        </NavLink>
        <NavLink to="/EveryInteraction/Lists" exact>
          <Tab>
            <Text>Lists</Text>
            <Text quantity>2</Text>
          </Tab>
        </NavLink>
      </MenuTabs>
    </Router>
  );
};

export default Tabs;
