import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';

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

const MainContent = ({ match }) => (
  <Fragment>
    <CoverImage />

    <Statistics>
      <div className="container">
        <div className="col-lg-offset-3">
          <StatiscticsWrapper>
            <Tabs />
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
                <Fragment>
                  <div className="col-lg-6">
                    <Route path={`${match.url}`} component={Feed} />
                  </div>
                </Fragment>
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

export default withRouter(MainContent);
