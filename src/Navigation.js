import React from "react";
import styled from "styled-components";
import HomeIcon from "./img/Icon_Home.svg";
import MomentsIcon from "./img/Icon_Moments.svg";
import NotificationsIcon from "./img/Icon_Notifications.svg";
import MessagesIcon from "./img/Icon_Messages.svg";

const Nav = styled.nav`
`;
const Menu = styled.ul`
  padding-left: 0px;
  margin: 0px;
`;
const MenuItem = styled.li`
  margin-right: 25px;
  font-size: 13px;
  display: inline-block;
  color: #667580;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const MenuItemText = styled.p`
  margin: 0px 0px 0px 5px;
  display: inline-block;
`;

const Icon = styled.img`
  width: 19px;
  height: 19px;
  vertical-align: middle;
  }};
`;

const Navigation = props => {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <Link href="#">
            <Icon src={HomeIcon} />
            <MenuItemText>Home</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">
            <Icon src={MomentsIcon} />
            <MenuItemText>Moments</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">
            <Icon src={NotificationsIcon} />
            <MenuItemText>Notifications</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">
            <Icon src={MessagesIcon} />
            <MenuItemText>Messages</MenuItemText>
          </Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navigation;
