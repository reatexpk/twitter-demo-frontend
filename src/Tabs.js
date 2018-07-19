// @flow
import React from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const MenuTabs = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
`;
const Tab = styled.li`
  display: block;
  text-align: center;
`;

const Text = styled.span`
  color: #707e88;
  font-size: 12px;
  line-height: 21px;
  font-weight: bold;
  display: block;
`;
const Quantity = Text.extend`
  font-size: 18px;
`;
const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 8px 20px 6px 20px;
  &.active {
    border-bottom: 4px solid #1da1f2;
    cursor: default;
  }
  &.active ${Quantity} {
    color: #1da1f2;
  }

  &:hover {
    border-bottom: 4px solid #1da1f2;
    transition: all 0.15s ease-in-out;
  }
  &:hover ${Quantity} {
    color: #1da1f2;
  }
`;

const isMainNavActive = (match, location) => {
  const matches = [`${match.url}`, `${match.url}/with-replies`, `${match.url}/with-media`];

  return matches.some(el => el === (location && location.pathname));
};

const Tabs = ({ userData, match }: { userData: Object, match: Object }) => (
  <MenuTabs>
    <Tab>
      <StyledNavLink to={`${match.url}`} isActive={isMainNavActive}>
        <Text>
Tweets
        </Text>
        <Quantity>
          {userData.statuses_count}
        </Quantity>
      </StyledNavLink>
    </Tab>

    <Tab>
      <StyledNavLink to={`${match.url}/Following`}>
        <Text>
Following
        </Text>
        <Quantity>
          {userData.following_count}
        </Quantity>
      </StyledNavLink>
    </Tab>

    <Tab>
      <StyledNavLink to={`${match.url}/Followers`}>
        <Text>
Followers
        </Text>
        <Quantity>
          {userData.followers_count}
        </Quantity>
      </StyledNavLink>
    </Tab>

    <Tab>
      <StyledNavLink to={`${match.url}/Likes`}>
        <Text>
Likes
        </Text>
        <Quantity>
460
        </Quantity>
      </StyledNavLink>
    </Tab>

    <Tab>
      <StyledNavLink to={`${match.url}/Lists`}>
        <Text>
Lists
        </Text>
        <Quantity>
2
        </Quantity>
      </StyledNavLink>
    </Tab>
  </MenuTabs>
);

export default withRouter(Tabs);
