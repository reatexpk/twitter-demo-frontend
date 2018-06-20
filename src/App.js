import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Profile from "./Profile";
import Header from "./Header";
import Navigation from "./Navigation";
import TwitterLogo from "./TwitterLogo";
import logo from "./img/Icon_Twitter Logo.svg";
import NavigationRight from "./NavigationRight";

import CoverImage from "./CoverImage";

import Statistics from "./Statistics";
import Tabs from "./Tabs";
import UserActions from "./UserActions";

import ProfileInfo from "./ProfileInfo";
import Feed from "./Feed";
import WhoToFollow from "./WhoToFollow";
import About from "./About";
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

const RightColumn = styled.div`
  margin-top: 9px;
`;

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: Helvetica;
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Redirect from="/" to="/EveryInteract" />

          <Helmet>
            <title>Twitter</title>
          </Helmet>
          <Profile />

          <Header>
            <div className="container">
              <HeaderWrapper>
                <Navigation />
                <TwitterLogo src={logo} alt="Twitter Logo" />
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
                  <Feed />
                </div>
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
        </StyledApp>
      </Router>
    );
  }
}
