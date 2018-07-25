// @flow
import React from 'react';
import styled from 'styled-components';
import {
  Switch, Route, withRouter, NavLink,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { tweetsFetchData } from './redux/actions';

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

type Props = {
  match: Object,
  tweets: Array<Object>,
  fetchData: Function,
};

const secretCode = process.env.REACT_APP_SECRET_CODE;
if (!secretCode) throw new Error('Missing secret code');

class Feed extends React.Component<Props> {
  componentDidMount() {
    const { match, fetchData } = this.props;
    const { id } = match.params;

    fetchData(id);
  }

  render() {
    const {
      match, tweets, hasErrored, isLoading,
    } = this.props;
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
              if (isLoading) {
                return (
                  <NoTweetsYet>
Loading...
                  </NoTweetsYet>
                );
              }
              if (tweets && tweets.length === 0) {
                return (
                  <NoTweetsYet>
There are no tweets yet :(
                  </NoTweetsYet>
                );
              }
              if (hasErrored) {
                return (
                  <NoTweetsYet>
Something went wrong
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

function mapStateToProps(state) {
  return {
    tweets: state.tweets.tweets,
    hasErrored: state.hasErrored,
    isLoading: state.tweets.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url, id) => {
      dispatch(tweetsFetchData(url, id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Feed));
