// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledAbout = styled.p`
  margin-top: 23px;
  line-height: 18px;
  font-size: 13px;
  color: #718290;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #718290;
  &:hover {
    text-decoration: underline;
  }
`;

const About = () => (
  <StyledAbout>
    © 2018 Twitter
    {' '}
    <StyledLink to="/about">
About
    </StyledLink>
    {' '}
    <StyledLink to="/help-center">
Help Center
    </StyledLink>
    {' '}
    <StyledLink to="/terms">
Terms
    </StyledLink>
    {' '}
    <StyledLink to="/privacy-policy">
Privacy policy
    </StyledLink>
    {' '}
    <StyledLink to="/cookies">
Cookies
    </StyledLink>
    {' '}
    <StyledLink to="/ads-info">
Ads info
    </StyledLink>
  </StyledAbout>
);

export default About;
