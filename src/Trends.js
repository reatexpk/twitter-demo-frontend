import React from 'react';
import styled from 'styled-components';

import Trend from './Trend';

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
  const dataTrends = [
    {
      title: '#BringYourDogToWorkDay',
    },
    {
      title: '#FridayFeeling',
      count: 12100,
    },
    {
      title: '#BrexitAnniversary',
      text: 'It’s one year since the UK voted to leave the European Union',
    },
    {
      title: 'HMS Queen Elizabeth',
      count: 1036,
    },
    {
      title: 'Joe Budden',
      count: 1036,
    },
    {
      title: 'Trident',
      count: 6136,
    },
  ];

  const trendsList = dataTrends.map(arg => (
    <Trend title={arg.title} count={arg.count} text={arg.text} key={Math.random()} />
  ));

  return (
    <StyledTrends>
      <Header>
        <Title>
United Kingdom Trends
        </Title>
        <Dot>
·
        </Dot>
        <StyledLink href="">
Change
        </StyledLink>
      </Header>
      {trendsList}
    </StyledTrends>
  );
};

export default Trends;
