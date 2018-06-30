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

const Tabs = ({ match }) => (
  <MenuTabs>
    <Tab>
      <StyledNavLink to={`${match.url}`} exact>
        <Text>
Tweets
        </Text>
        <Quantity>
8,058
        </Quantity>
      </StyledNavLink>
    </Tab>

    <Tab>
      <StyledNavLink to={`${match.url}/Following`}>
        <Text>
Following
        </Text>
        <Quantity>
721
        </Quantity>
      </StyledNavLink>
    </Tab>

    <Tab>
      <StyledNavLink to={`${match.url}/Followers`}>
        <Text>
Followers
        </Text>
        <Quantity>
1,815
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
      <StyledNavLink to={`${match.url}/Lists`} exact>
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
