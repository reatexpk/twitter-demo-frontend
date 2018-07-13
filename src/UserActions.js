// @flow
import React from 'react';
import styled from 'styled-components';
import iconMore from './img/icon-more.png';

const StyledUserActions = styled.div`
  align-self: center;
`;

const FollowButton = styled.button`
  padding: 9px 27px 9px 27px;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: #fff;
  color: #1da1f2;
  cursor: pointer;
`;

const IconMore = styled.button`
  padding: 18px 21px 18px 21px;
  border: none;
  border-radius: 100px;
  vertical-align: middle;
  background: url(${iconMore}) no-repeat center;
  cursor: pointer;
`;

const UserActions = () => (
  <StyledUserActions>
    <FollowButton>
Follow
    </FollowButton>
    <IconMore />
  </StyledUserActions>
);

export default UserActions;
