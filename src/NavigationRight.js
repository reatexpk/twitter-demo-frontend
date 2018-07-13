// @flow
import React from 'react';
import styled from 'styled-components';
import iconMagnifier from './img/icon-magnifier.svg';

const NavRight = styled.div`
  display: flex;
`;

const SearchBar = styled.div`
  display: flex;
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  border-radius: 100px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  padding: 6px 0px 6px 11px;

  ::placeholder {
    line-height: normal;
    font-size: 12px;
    letter-spacing: 0.01px;
  }
`;

const SearchButton = styled.button`
  width: 15px;
  height: 15px;
  margin: 9px 12px 8px 4px;
  padding: 0;
  border: none;
  background: url(${iconMagnifier}) no-repeat;
  cursor: pointer;
`;

const Avatar = styled.div`
  margin: 0px 18px 0px 18px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px 16px 8px 16px;
  box-sizing: border-box;
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.01px;
  color: #ffffff;
  cursor: pointer;
`;

const publicUrl = process.env.PUBLIC_URL;
if (publicUrl == null) throw new Error('Missing PUBLIC_URL');

const NavigationRight = () => (
  <NavRight>
    <SearchBar>
      <SearchInput placeholder="Search Twitter" />
      <SearchButton />
    </SearchBar>
    <Avatar>
      <img src={`${publicUrl}/img/avatar.png`} alt="avatar" />
    </Avatar>
    <Button>
Tweet
    </Button>
  </NavRight>
);

export default NavigationRight;
