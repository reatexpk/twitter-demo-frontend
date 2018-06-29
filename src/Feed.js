import React from 'react';
import styled from 'styled-components';

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

const Link = styled.a`
  display: inline-block;
  outline: none;
  text-decoration: none;
  color: ${({ active }) => (active ? '#000000' : '#1da1f2')};
`;

const TweetsTab = styled.li`
  display: inline-block;
  padding: 15px 15px 10px 15px;
  line-height: normal;
  font-size: 18px;
`;

const Feed = () => {
  const dataTweets = [
    {
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

  const tweetsList = dataTweets.map(arg => (
    <Tweet
      avatar={arg.avatar}
      name={arg.name}
      nickname={arg.nickname}
      date={arg.date}
      sharedFromAnotherSite={arg.sharedFromAnotherSite}
      text={arg.text}
      imageSrc={arg.imageSrc}
      previewImageSrc={arg.previewImageSrc}
      previewHeader={arg.previewHeader}
      previewText={arg.previewText}
      previewSource={arg.previewSource}
      loves={arg.loves}
      loved={arg.loved}
      retweets={arg.retweets}
      retweeted={arg.retweeted}
      comments={arg.comments}
    />
  ));

  return (
    <StyledFeed>
      <TweetsTabs>
        <Link href="/" active>
          <TweetsTab>
Tweets
          </TweetsTab>
        </Link>

        <Link href="/">
          <TweetsTab>
Tweets & Replies
          </TweetsTab>
        </Link>

        <Link href="/">
          <TweetsTab>
Media
          </TweetsTab>
        </Link>
      </TweetsTabs>

      {tweetsList}
    </StyledFeed>
  );
};

export default Feed;
