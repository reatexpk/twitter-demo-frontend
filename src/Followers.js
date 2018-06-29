import React from 'react';
import styled from 'styled-components';

const StyledFollowers = styled.div`
  margin-left: 2px;
  margin-top: 8px;
`;

const Link = styled.a``;

const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 5px;
`;

const Followers = () => {
  const dataFollowers = [
    {
      to: '/SomeFollower',
      img: `${process.env.PUBLIC_URL}/img/Follower1.png`,
      description: 'followerDescr',
    },
    {
      to: '/SomeFollower',
      img: `${process.env.PUBLIC_URL}/img/Follower2.png`,
      description: 'followerDescr',
    },
    {
      to: '/SomeFollower',
      img: `${process.env.PUBLIC_URL}/img/Follower3.png`,
      description: 'followerDescr',
    },
    {
      to: '/SomeFollower',
      img: `${process.env.PUBLIC_URL}/img/Follower4.png`,
      description: 'followerDescr',
    },
    {
      to: '/SomeFollower',
      img: `${process.env.PUBLIC_URL}/img/Follower5.png`,
      description: 'followerDescr',
    },
    {
      to: '/SomeFollower',
      img: `${process.env.PUBLIC_URL}/img/Follower6.png`,
      description: 'followerDescr',
    },
  ];

  const followersList = dataFollowers.map(arg => (
    <Link key={Math.random()} href={arg.to}>
      <Image src={arg.img} alt={arg.descr} />
    </Link>
  ));

  return (
    <StyledFollowers>
      {followersList}
    </StyledFollowers>
  );
};

export default Followers;
