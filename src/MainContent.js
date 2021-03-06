// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CoverImage from './CoverImage';

import Statistics from './Statistics';
import Tabs from './Tabs';
import UserActions from './UserActions';

import ProfileInfo from './ProfileInfo';
import FollowersYouKnow from './FollowersYouKnow';
import PhotosAndVideos from './PhotosAndVideos';

import Feed from './Feed';

import WhoToFollow from './WhoToFollow';
import About from './About';
import Trends from './Trends';

const StatiscticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainSection = styled.main`
  background: #e6ecf0;
`;

const MainSectionWrapper = styled.div`
  display: flex;
`;

const RightColumn = styled.div`
  margin-top: 9px;
`;

type Props = {
  userInfo: Object,
  match: Object,
};

const MainContent = (props: Props) => {
  const { userInfo, match } = props;
  const { header_static: headerStatic } = userInfo;
  return (
    <Fragment>
      <CoverImage src={headerStatic} />

      <Statistics>
        <div className="container">
          <div className="col-lg-offset-3">
            <StatiscticsWrapper>
              <Tabs match={match} />
              <UserActions />
            </StatiscticsWrapper>
          </div>
        </div>
      </Statistics>

      <MainSection>
        <div className="container">
          <MainSectionWrapper>
            <div className="col-lg-3">
              <ProfileInfo />
              <FollowersYouKnow />
              <PhotosAndVideos />
            </div>

            <Switch>
              <Route
                path={`${match.url}/Following`}
                render={() => (
                  <div className="col-lg-6">
                    <h2>
Following
                    </h2>
                  </div>
                )}
              />
              <Route
                path={`${match.url}/Followers`}
                render={() => (
                  <div className="col-lg-6">
                    <h2>
Followers
                    </h2>
                  </div>
                )}
              />
              <Route
                path={`${match.url}/Likes`}
                render={() => (
                  <div className="col-lg-6">
                    <h2>
Likes
                    </h2>
                  </div>
                )}
              />
              <Route
                path={`${match.url}/Lists`}
                render={() => (
                  <div className="col-lg-6">
                    <h2>
Lists
                    </h2>
                  </div>
                )}
              />
              <Route
                path={`${match.url}`}
                render={() => (
                  <div className="col-lg-6">
                    <Route path="/:id" component={Feed} />
                  </div>
                )}
              />
            </Switch>
            <div className="col-lg-3">
              <RightColumn>
                <WhoToFollow />
                <Trends />
                <About />
              </RightColumn>
            </div>
          </MainSectionWrapper>
        </div>
      </MainSection>
    </Fragment>
  );
};

function mapStateToProps(state) {
  return { userInfo: state.profile.userInfo };
}

export default connect(mapStateToProps)(withRouter(MainContent));
