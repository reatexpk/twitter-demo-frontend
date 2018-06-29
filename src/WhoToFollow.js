import React from 'react';
import styled from 'styled-components';

import User from './User';
import FindPeopleYouKnow from './FindPeopleYouKnow';

const Wrapper = styled.div`
  background: #fff;
`;
const Header = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h3`
  margin: 14px 0 15px 13px;
  color: #292f33;
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

const WhoToFollow = () => {
  const dataUsers = [
    {
      to: '/AppleInsider',
      img: `${process.env.PUBLIC_URL}/img/AppleInsider.png`,
      name: 'AppleInsider',
      nickname: '@appleinsider',
    },
    {
      to: '/Creode',
      img: `${process.env.PUBLIC_URL}/img/Creode.png`,
      name: 'Creode',
      nickname: '@Creode',
    },
    {
      to: '/EpiphanySearch',
      img: `${process.env.PUBLIC_URL}/img/EpiphanySearch.png`,
      name: 'EpiphanySearch',
      nickname: '@EpiphanySearch',
    },
  ];

  const whoToFollowList = dataUsers.map(arg => (
    <User key={Math.random()} href={arg.to} src={arg.img} name={arg.name} nickname={arg.nickname} />
  ));

  return (
    <Wrapper>
      <Header>
        <Title>
Who to follow
        </Title>
        <Dot>
·
        </Dot>
        <StyledLink href="">
Refresh
        </StyledLink>
        <Dot>
·
        </Dot>
        <StyledLink href="">
View all
        </StyledLink>
      </Header>
      {whoToFollowList}
      <FindPeopleYouKnow />
    </Wrapper>
  );
};

export default WhoToFollow;
