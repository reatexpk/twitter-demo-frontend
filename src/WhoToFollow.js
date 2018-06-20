import React from "react";
import styled from "styled-components";

import User from "./User.js";
import FindPeopleYouKnow from "./FindPeopleYouKnow";

const Wrapper = styled.div`
  background: #fff;
`;
const Header = styled.div`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h3`
  margin: 14px 0 15px 13px;
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
  return (
    <Wrapper>
      <Header>
        <Title>Who to follow</Title>
        <Dot>·</Dot>
        <StyledLink href="">Refresh</StyledLink>
        <Dot>·</Dot>
        <StyledLink href="">View all</StyledLink>
      </Header>
      <User
        src={process.env.PUBLIC_URL + "/img/AppleInsider.png"}
        name="AppleInsider"
        nickname="@appleinsider"
      />
      <User
        src={process.env.PUBLIC_URL + "/img/Creode.png"}
        name="Creode"
        nickname="@Creode"
      />
      <User
        src={process.env.PUBLIC_URL + "/img/EpiphanySearch.png"}
        name="EpiphanySearch"
        nickname="@EpiphanySearch"
      />
      <FindPeopleYouKnow />
    </Wrapper>
  );
};

export default WhoToFollow;
