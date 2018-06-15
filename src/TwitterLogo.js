import React from "react";
import styled from "styled-components";
import Logo from "./img/Icon_ Twitter Logo.svg";

const StyledLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TwitterLogo = () => {
  return <StyledLogo src={Logo} alt="Logo" />;
};

export default TwitterLogo;
