import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import homeIcon from "./img/Icon_Home.svg";
import momentsIcon from "./img/Icon_Moments.svg";
import notificationsIcon from "./img/Icon_Notifications.svg";
import messagesIcon from "./img/Icon_Messages.svg";

const Nav = styled.nav``;

const Menu = styled.ul`
  padding-left: 0px;
  margin: 0px;
`;
const MenuItem = styled.li`
  margin-right: 25px;
  font-size: 13px;
  font-weight: bold;
  display: inline-block;
  color: #667580;
  a {
    text-decoration: none;
    color: #667580;
  }
`;

const MenuItemText = styled.p`
  margin: 0px 0px 0px 5px;
  display: inline-block;
`;

const Icon = styled.img`
  width: 19px;
  height: 19px;
  vertical-align: middle;
`;

const Navigation = props => {
  return (
    <Router>
      <Nav>
        <Menu>
          <MenuItem>
            <Link to="/home">
              <Icon src={homeIcon} />
              <MenuItemText>Home</MenuItemText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/moments">
              <Icon src={momentsIcon} />
              <MenuItemText>Moments</MenuItemText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/notifications">
              <Icon src={notificationsIcon} />
              <MenuItemText>Notifications</MenuItemText>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/messages">
              <Icon src={messagesIcon} />
              <MenuItemText>Messages</MenuItemText>
            </Link>
          </MenuItem>
        </Menu>
      </Nav>
    </Router>
  );
};

export default Navigation;
