// @flow
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import addData from './redux/actions';

import MainContent from './MainContent';

type Props = {
  userData: Object,
  match: Object,
  addDataToStore: Function,
};

type State = {
  userData: Object,
};

const secretCode = process.env.REACT_APP_SECRET_CODE;
if (!secretCode) throw new Error('Missing secret code');

class Profile extends React.Component<Props, State> {
  state = {
    userData: {},
  };

  componentDidMount() {
    const url = 'https://twitter-demo.erodionov.ru';
    const { match, addDataToStore } = this.props;
    const { id } = match.params;

    fetch(`${url}/api/v1/accounts/${id}?access_token=${secretCode}`)
      .then(res => res.json())
      .then((data) => {
        addDataToStore(data);
        this.setState({ userData: data });
      });
  }

  render() {
    const { userData } = this.state;
    return (
      <Fragment>
        <Helmet>
          <title>
            Twitter |
            {` ${userData.display_name || ' '}`}
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
          <Route path="/:id" render={props => <MainContent {...props} userData={userData} />} />
        </Switch>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { userInfo: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addDataToStore: (data) => {
      dispatch(addData(data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
