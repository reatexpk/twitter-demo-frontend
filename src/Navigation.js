import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import homeIcon from "./img/icon-home.svg";
import momentsIcon from "./img/icon-moments.svg";
import notificationsIcon from "./img/icon-notifications.svg";
import messagesIcon from "./img/icon-messages.svg";

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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #667580;
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
    <Nav>
      <Menu>
        <MenuItem>
          <StyledLink to="/home">
            <Icon src={homeIcon} />
            <MenuItemText>Home</MenuItemText>
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/moments">
            <Icon src={momentsIcon} />
            <MenuItemText>Moments</MenuItemText>
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/notifications">
            <Icon src={notificationsIcon} />
            <MenuItemText>Notifications</MenuItemText>
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/messages">
            <Icon src={messagesIcon} />
            <MenuItemText>Messages</MenuItemText>
          </StyledLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navigation;
