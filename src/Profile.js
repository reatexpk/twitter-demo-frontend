import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainContent from './MainContent';

const Profile = () => (
  <Fragment>
    <Helmet>
      <title>
Twitter | EveryInteract
      </title>
    </Helmet>

    <Switch>
      <Redirect from="/" to="/EveryInteract" exact />
      <Route
        path="/moments"
        render={() => (
          <h2>
Moments
          </h2>
        )}
      />
      <Route
        path="/notifications"
        render={() => (
          <h2>
Notifications
          </h2>
        )}
      />
      <Route
        path="/messages"
        render={() => (
          <h2>
Messages
          </h2>
        )}
      />
      <Route path="/:username" render={() => <MainContent />} />
    </Switch>
  </Fragment>
);

export default Profile;
