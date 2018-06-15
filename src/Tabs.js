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

const TabText = styled.span`
  color: ${props => (!props.active ? "#707e88" : "#1da1f2")};
  font-size: ${props => (props.label ? "12px" : "18px")};
  line-height: 21px;
  display: block;
`;

const Tabs = () => {
  return (
    <MenuTabs>
      <Link href="#">
        <Tab active>
          <TabText label>Tweets</TabText>
          <TabText active>8,058</TabText>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <TabText label>Following</TabText>
          <TabText>721</TabText>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <TabText label>Followers</TabText>
          <TabText>1,815</TabText>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <TabText label>Likes</TabText>
          <TabText>460</TabText>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <TabText label>Lists</TabText>
          <TabText>2</TabText>
        </Tab>
      </Link>
    </MenuTabs>
  );
};

export default Tabs;
