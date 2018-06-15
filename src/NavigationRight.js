import React from "react";
import styled from "styled-components";
import Icon_Magnifier from "./img/Icon_Magnifier.svg";

const NavRight = styled.div`
  display: inline-block;
`;

const SearchBar = styled.div`
  display: inline-block;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 6px 30px 6px 11px;
  width: 220px;
  background-color: #f5f8fa;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;

  ::placeholder {
    line-height: normal;
    font-size: 12px;
    letter-spacing: 0.01px;
  }
`;

const SearchButton = styled.span`
  position: absolute;
  top: 25%;
  right: 12px;
  width: 15px;
  height: 15px;
  background: url(${Icon_Magnifier}) no-repeat;
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
  padding: 9px 16px 9px 16px;
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.01px;
  color: #ffffff;
  cursor: pointer;
`;

const NavigationRight = () => {
  return (
    <NavRight>
      <SearchBar>
        <SearchInput placeholder="Search Twitter" />
        <SearchButton />
      </SearchBar>
      <Avatar>
        <img src={process.env.PUBLIC_URL + "/img/avatar.png"} alt="avatar" />
      </Avatar>
      <Button>Tweet</Button>
    </NavRight>
  );
};

export default NavigationRight;
