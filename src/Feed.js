import React from "react";
import styled from "styled-components";
import Tweet from "./Tweet";

const StyledFeed = styled.section`
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

const Feed = () => {
  return (
    <StyledFeed>
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

      <Tweet
        avatar="TweetAvatar.png"
        name="Every Interaction"
        nickname="@EveryInteract"
        date="2 Mar 2015"
        type="common"
        text="We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI"
        attachment="Tweet1.png"
        loves="47"
        retweets="17"
        comments=""
        pinned
        loved
      />

      <Tweet
        avatar="TweetAvatar.png"
        name="Every Interaction"
        nickname="@EveryInteract"
        date="23h"
        type="common"
        text="Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/"
        loves="2"
        retweets="3"
        comments="1"
      />

      <Tweet
        avatar="TweetAvatar.png"
        name="Every Interaction"
        nickname="@EveryInteract"
        date="Nov 18"
        type="share"
        text="Variable web fonts are coming, and will open a world of opportunities for weight use online"
        previewHeader="The Future of Web Fonts"
        previewText="We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…"
        previewSource="vilijamis.com"
        loves="0"
        retweets="0"
        comments=""
      />
    </StyledFeed>
  );
};

export default Feed;
