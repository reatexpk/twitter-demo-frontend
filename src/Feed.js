import React from "react";
import styled from "styled-components";
import Icon_Pinned from "./img/Icon_Pinned.svg";
import Tweet from "./Tweet";

const StyledTweets = styled.section`
  margin-top: 9px;
  background-color: #ffffff;
`;

const TweetsTabs = styled.ul`
  margin: 0;
  padding: 0;
  border: 1px solid #e1e8ed;
`;

const Link = styled.a`
  display: inline-block;
  outline: none;
  text-decoration: none;
  color: ${props => (props.active ? "#000000" : "#1da1f2")};
`;

const TweetsTab = styled.li`
  display: inline-block;
  padding: 15px 15px 10px 15px;
  line-height: normal;
  font-size: 18px;
  letter-spacing: -0.263077px;
`;

const PinnedTweet = styled.div`
  display: flex;
  margin: 8px 0 4px 48px;
`;

const PinnedIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const PinnedText = styled.p`
  margin: 0 12px;
  font-size: 12px;
  letter-spacing: -0.175385px;
  color: #707e88;
`;

const Feed = () => {
  return (
    <StyledTweets>
      <TweetsTabs>
        <Link href="#" active>
          <TweetsTab>Tweets</TweetsTab>
        </Link>

        <Link href="#">
          <TweetsTab>Tweets & Replies</TweetsTab>
        </Link>

        <Link href="#">
          <TweetsTab>Media</TweetsTab>
        </Link>
      </TweetsTabs>
      <PinnedTweet>
        <PinnedIcon src={Icon_Pinned} />
        <PinnedText>Pinned Tweet</PinnedText>
      </PinnedTweet>

      <Tweet date="2 Mar 2015" likes="47" retweets="17" comments="0" id="1" />

      <Tweet date="23h" likes="2" retweets="3" comments="1" id="2" />

      <Tweet date="Nov 18" likes="0" retweets="0" comments="0" id="3" />
    </StyledTweets>
  );
};

export default Feed;
