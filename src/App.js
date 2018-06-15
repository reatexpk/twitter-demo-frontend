import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import Navigation from "./Navigation";
import TwitterLogo from "./TwitterLogo";
import NavigationRight from "./NavigationRight";

import CoverImage from "./CoverImage";

import Statistics from "./Statistics";
import Tabs from "./Tabs";
import UserActions from "./UserActions";

import ProfileInfo from "./ProfileInfo";
import Tweets from "./Tweets";
import Trends from "./Trends";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: Helvetica;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header>
          <div className="container">
            <HeaderWrapper>
              <Navigation />
              <TwitterLogo />
              <NavigationRight />
            </HeaderWrapper>
          </div>
        </Header>

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
              </div>
              <div className="col-lg-6">
                <Tweets />
              </div>
              <div className="col-lg-3">
                <Trends />
              </div>
            </MainSectionWrapper>
          </div>
        </MainSection>
      </StyledApp>
    );
  }
}
