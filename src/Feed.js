import React from 'react';
import styled from 'styled-components';
import {
  Switch, Route, withRouter, NavLink,
} from 'react-router-dom';

import Tweet from './Tweet';

const StyledFeed = styled.section`
  margin-top: 9px;
  background-color: #ffffff;
`;

const TweetsTabs = styled.ul`
  margin: 0;
  padding: 0;
  border: 1px solid #e1e8ed;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: #1da1f2;
  &.active {
    color: #000000;
    cursor: default;
  }
  &:hover {
    color: #000000;
  }
`;

const TweetsTab = styled.li`
  display: inline-block;
  padding: 15px 15px 10px 15px;
  line-height: normal;
  font-size: 18px;
`;

const dataTweets = [
  {
    id: 1,
    avatar: `${process.env.PUBLIC_URL}/img/TweetAvatar.png`,
    name: 'Every Interaction',
    nickname: '@EveryInteract',
    date: '2 Mar 2015',
    sharedFromAnotherSite: false,
    text:
      "We’ve made some more resources for all you wonderful <a href='/search?q=design'>#design</a> folk <a href='https://everyinteraction.com/resources/'>everyinteraction.com/resources/</a> <a href='search?q=webdesign'>#webdesign</a> <a href='search?q=UI'>#UI</a>",
    imageSrc: `${process.env.PUBLIC_URL}/img/Tweet1.png`,
    loves: 47,
    retweets: 17,
    pinned: true,
    loved: true,
  },
  {
    id: 2,
    avatar: `${process.env.PUBLIC_URL}/img/TweetAvatar.png`,
    name: 'Every Interaction',
    nickname: '@EveryInteract',
    date: '23h',
    sharedFromAnotherSite: false,
    text:
      "Our new website concept; Taking you from… @ Every Interaction <a href='https://instagram.com/p/BNFGrfhBP3M/'>instagram.com/p/BNFGrfhBP3M/</a>",
    loves: 2,
    retweets: 3,
    comments: 1,
  },
  {
    id: 3,
    avatar: `${process.env.PUBLIC_URL}/img/TweetAvatar.png`,
    name: 'Every Interaction',
    nickname: '@EveryInteract',
    date: 'Nov 18',
    sharedFromAnotherSite: true,
    text:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
    previewImageSrc: `${process.env.PUBLIC_URL}/img/Tweet3.png`,
    previewHeader: 'The Future of Web Fonts',
    previewText:
      'We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…',
    previewSource: 'vilijamis.com',
    loves: 0,
    retweets: 0,
  },
];

const Feed = ({ match }) => {
  const tweetsList = dataTweets.map(tweet => (
    <Tweet
      key={tweet.id}
      avatar={tweet.avatar}
      name={tweet.name}
      nickname={tweet.nickname}
      date={tweet.date}
      sharedFromAnotherSite={tweet.sharedFromAnotherSite}
      text={tweet.text}
      imageSrc={tweet.imageSrc}
      previewImageSrc={tweet.previewImageSrc}
      previewHeader={tweet.previewHeader}
      previewText={tweet.previewText}
      previewSource={tweet.previewSource}
      loves={tweet.loves}
      loved={tweet.loved}
      retweets={tweet.retweets}
      retweeted={tweet.retweeted}
      comments={tweet.comments}
    />
  ));

  return (
    <StyledFeed>
      <TweetsTabs>
        <StyledNavLink to={`${match.url}`} exact>
          <TweetsTab>
Tweets
          </TweetsTab>
        </StyledNavLink>

        <StyledNavLink to={`${match.url}/with-replies`}>
          <TweetsTab>
Tweets & Replies
          </TweetsTab>
        </StyledNavLink>

        <StyledNavLink to={`${match.url}/with-media`}>
          <TweetsTab>
Media
          </TweetsTab>
        </StyledNavLink>
      </TweetsTabs>

      <Switch>
        <Route
          path={`${match.url}/with-replies`}
          render={() => (
            <h2>
Replies
            </h2>
          )}
        />
        <Route
          path={`${match.url}/with-media`}
          render={() => (
            <h2>
Media
            </h2>
          )}
        />
        <Route path={`${match.url}`} render={() => tweetsList} />
      </Switch>
    </StyledFeed>
  );
};

export default withRouter(Feed);
