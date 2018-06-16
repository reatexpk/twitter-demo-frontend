import React from "react";
import styled from "styled-components";

const MenuTabs = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
`;
const Tab = styled.li`
  display: block;
  padding: 8px 20px 6px 20px;
  text-align: center;
  border-bottom: ${props => (props.active ? "4px solid #1da1f2" : "none")};
`;

const Link = styled.a`
  outline: none;
  text-decoration: none;
  color: #707e88;
`;

const Text = styled.span`
  color: ${props => (props.active ? "#1da1f2" : "#707e88")};
  font-size: ${props => (props.label ? "12px" : "18px")};
  line-height: 21px;
  display: block;
`;

const Tabs = () => {
  return (
    <MenuTabs>
      <Link href="#">
        <Tab active>
          <Text label>Tweets</Text>
          <Text active>8,058</Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text label>Following</Text>
          <Text>721</Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text label>Followers</Text>
          <Text>1,815</Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text label>Likes</Text>
          <Text>460</Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text label>Lists</Text>
          <Text>2</Text>
        </Tab>
      </Link>
    </MenuTabs>
  );
};

export default Tabs;
