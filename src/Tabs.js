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
  font-size: ${props => (props.quantity ? "18px" : "12px")};
  line-height: 21px;
  font-weight: bold;
  display: block;
`;

const Tabs = () => {
  return (
    <MenuTabs>
      <Link href="#">
        <Tab active>
          <Text>Tweets</Text>
          <Text quantity active>
            8,058
          </Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text>Following</Text>
          <Text quantity>721</Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text>Followers</Text>
          <Text quantity>1,815</Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text>Likes</Text>
          <Text quantity>460</Text>
        </Tab>
      </Link>
      <Link href="#">
        <Tab>
          <Text>Lists</Text>
          <Text quantity>2</Text>
        </Tab>
      </Link>
    </MenuTabs>
  );
};

export default Tabs;
