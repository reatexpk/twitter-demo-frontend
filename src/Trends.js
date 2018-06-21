import React from "react";
import styled from "styled-components";

import Trend from "./Trend";

const StyledTrends = styled.div`
  min-height: 389px;
  margin-top: 10px;
  padding-top: 15px;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 16px;
  padding-bottom: 4px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  letter-spacing: -0.3px;
  color: #000;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: normal;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const Dot = styled.span`
  margin: 0 6px;
  color: #66757f;
`;

const Trends = () => {
  return (
    <StyledTrends>
      <Header>
        <Title>United Kingdom Trends</Title>
        <Dot>·</Dot>
        <StyledLink href="">Change</StyledLink>
      </Header>
      <Trend title="#BringYourDogToWorkDay" />
      <Trend title="#FridayFeeling" count="12.1K" />
      <Trend
        title="#BrexitAnniversary"
        text="It’s one year since the UK voted to leave the European Union"
      />
      <Trend title="HMS Queen Elizabeth" count="1,036" />
      <Trend title="Joe Budden" count="1,036" />
      <Trend title="Trident" count="6,136" />
    </StyledTrends>
  );
};

export default Trends;
