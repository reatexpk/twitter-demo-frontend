// @flow
import React from 'react';
import styled from 'styled-components';
import {
  Switch, Route, withRouter, NavLink,
} from 'react-router-dom';

import Tweet from './Tweet';

const StyledFeed = styled.section`
  margin-top: 9px;
  background-color: #ffffff;
  white-space: pre-wrap;
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

const NoTweetsYet = styled.h2`
  text-align: center;
  margin: 0 0;
  padding: 20px;
`;

type State = {
  tweets: Array<Object>,
  loaded: boolean,
};

type Props = {
  match: Object,
};

const secretCode = process.env.REACT_APP_SECRET_CODE;
if (secretCode === null && secretCode === undefined) throw new Error('Missing secret code');

class Feed extends React.Component<Props, State> {
  state = {
    tweets: [],
    loaded: false,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const url = 'https://twitter-demo.erodionov.ru';

    fetch(`${url}/api/v1/accounts/${id}/statuses?access_token=${secretCode}`)
      .then(res => res.json())
      .then(data => this.setState({
        tweets: data,
        loaded: true,
      }));
  }

  render() {
    const { tweets, loaded } = this.state;
    const { match } = this.props;
    const tweetsList = tweets.map(tweet => (
      <Tweet
        key={tweet.id}
        avatar={tweet.account.avatar_static}
        name={tweet.account.display_name}
        nickname={tweet.account.username}
        date={tweet.created_at}
        sharedFromAnotherSite={tweet.sharedFromAnotherSite}
        content={tweet.content}
        media={tweet.media_attachments}
        previewImageSrc={tweet.previewImageSrc}
        previewHeader={tweet.previewHeader}
        previewText={tweet.previewText}
        previewSource={tweet.previewSource}
        loves={tweet.favourites_count}
        loved={tweet.favourited}
        retweets={tweet.reblogs_count}
        retweeted={tweet.reblogged}
        comments={tweet.comments}
        pinned={tweet.pinned}
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
          <Route
            path={`${match.url}`}
            render={() => {
              if (tweets.length === 0 && loaded) {
                return (
                  <NoTweetsYet>
There are no tweets yet :(
                  </NoTweetsYet>
                );
              }
              return tweetsList;
            }}
          />
        </Switch>
      </StyledFeed>
    );
  }
}

export default withRouter(Feed);
