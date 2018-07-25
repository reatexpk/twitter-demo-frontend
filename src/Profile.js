// @flow
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { userInfoFetchData } from './redux/actions';

import MainContent from './MainContent';

type Props = {
  userInfo: Object,
  match: Object,
  fetchData: Function,
};

class Profile extends React.Component<Props> {
  componentDidMount() {
    const { match, fetchData } = this.props;
    const { id } = match.params;

    fetchData('https://twitter-demo.erodionov.ru', id);
  }

  render() {
    const { userInfo } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>
            Twitter |
            {` ${userInfo.display_name || ' '}`}
          </title>
        </Helmet>

        <Switch>
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
          <Route path="/:id" component={MainContent} />
        </Switch>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.profile.userInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url, id) => {
      dispatch(userInfoFetchData(url, id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
