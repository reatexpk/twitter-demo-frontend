import React from "react";
import styled from "styled-components";

import iconFollowers from "./img/Icon_Followers.png";

import Followers from "./Followers";

const StyledFollowersYouKnow = styled.div`
  margin: 18px 0 31px 5px;
`;

const Icon = styled.img`
  width: 12px;
  height: 15px;
  vertical-align: middle;
`;

const Link = styled.a`
  margin-left: 12px;
  text-decoration: none;
  font-size: 14px;
  color: #1da1f2;
  &:hover {
    text-decoration: underline;
  }
`;

const FollowersYouKnow = () => {
  return (
    <StyledFollowersYouKnow>
      <Icon src={iconFollowers} alt="Followers you know" />
      <Link href="">6 Followers you know</Link>
      <Followers
        imageSrc={[
          process.env.PUBLIC_URL + "/img/Follower1.png",
          process.env.PUBLIC_URL + "/img/Follower2.png",
          process.env.PUBLIC_URL + "/img/Follower3.png",
          process.env.PUBLIC_URL + "/img/Follower4.png",
          process.env.PUBLIC_URL + "/img/Follower5.png",
          process.env.PUBLIC_URL + "/img/Follower6.png"
        ]}
      />
    </StyledFollowersYouKnow>
  );
};

export default FollowersYouKnow;
