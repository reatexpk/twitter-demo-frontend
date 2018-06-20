import React from "react";
import styled from "styled-components";

const StyledAbout = styled.p`
  margin-top: 23px;
  line-height: 18px;
  font-size: 13px;
  color: #718290;
`;

const Link = styled.a`
  text-decoration: none;
  color: #718290;
  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      © 2018 Twitter <Link href="">About</Link> <Link href="">Help Center</Link>{" "}
      <Link href="">Terms</Link> <Link href="">Privacy policy</Link>{" "}
      <Link href="">Cookies</Link> <Link href="">Ads info</Link>
    </StyledAbout>
  );
};

export default About;
