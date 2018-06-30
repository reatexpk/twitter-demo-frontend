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

const dataFollowers = [
  {
    id: 1,
    to: '/SomeFollower',
    img: `${process.env.PUBLIC_URL}/img/Follower1.png`,
    description: 'followerDescr',
  },
  {
    id: 2,
    to: '/SomeFollower',
    img: `${process.env.PUBLIC_URL}/img/Follower2.png`,
    description: 'followerDescr',
  },
  {
    id: 3,
    to: '/SomeFollower',
    img: `${process.env.PUBLIC_URL}/img/Follower3.png`,
    description: 'followerDescr',
  },
  {
    id: 4,
    to: '/SomeFollower',
    img: `${process.env.PUBLIC_URL}/img/Follower4.png`,
    description: 'followerDescr',
  },
  {
    id: 5,
    to: '/SomeFollower',
    img: `${process.env.PUBLIC_URL}/img/Follower5.png`,
    description: 'followerDescr',
  },
  {
    id: 6,
    to: '/SomeFollower',
    img: `${process.env.PUBLIC_URL}/img/Follower6.png`,
    description: 'followerDescr',
  },
];

const Followers = () => {
  const followersList = dataFollowers.map(follower => (
    <Link key={follower.id} href={follower.to}>
      <Image src={follower.img} alt={follower.descr} />
    </Link>
  ));

  return (
    <StyledFollowers>
      {followersList}
    </StyledFollowers>
  );
};

export default Followers;
