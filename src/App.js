import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './Profile';

import Header from './Header';
import Navigation from './Navigation';
import TwitterLogo from './TwitterLogo';
import logo from './img/icon-twitter-logo.svg';
import NavigationRight from './NavigationRight';

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: Helvetica;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const App = () => (
  <Router>
    <StyledApp>
      <Header>
        <div className="container">
          <HeaderWrapper>
            <Navigation />
            <TwitterLogo src={logo} alt="Twitter Logo" />
            <NavigationRight />
          </HeaderWrapper>
        </div>
      </Header>
      <Switch>
        <Route
          path="/:direction(about|help-center|terms|privacy-policy|cookies|ads-info|followers-you_know|media|search-people)"
          render={() => (
            <h2>
Some page
            </h2>
          )}
        />
        <Route path="/:id" component={Profile} />
      </Switch>
    </StyledApp>
  </Router>
);

export default App;
