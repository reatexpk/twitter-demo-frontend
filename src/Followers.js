// @flow
import React from 'react';
import styled from 'styled-components';

const publicUrl = process.env.PUBLIC_URL;
if (publicUrl == null) throw new Error('Missing PUBLIC_URL');

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
    img: `${publicUrl}/img/Follower1.png`,
    description: 'followerDescr',
  },
  {
    id: 2,
    to: '/SomeFollower',
    img: `${publicUrl}/img/Follower2.png`,
    description: 'followerDescr',
  },
  {
    id: 3,
    to: '/SomeFollower',
    img: `${publicUrl}/img/Follower3.png`,
    description: 'followerDescr',
  },
  {
    id: 4,
    to: '/SomeFollower',
    img: `${publicUrl}/img/Follower4.png`,
    description: 'followerDescr',
  },
  {
    id: 5,
    to: '/SomeFollower',
    img: `${publicUrl}/img/Follower5.png`,
    description: 'followerDescr',
  },
  {
    id: 6,
    to: '/SomeFollower',
    img: `${publicUrl}/img/Follower6.png`,
    description: 'followerDescr',
  },
];

const Followers = () => {
  const followersList = dataFollowers.map(follower => (
    <Link key={follower.id} href={follower.to}>
      <Image src={follower.img} alt={follower.description} />
    </Link>
  ));

  return (
    <StyledFollowers>
      {followersList}
    </StyledFollowers>
  );
};

export default Followers;
