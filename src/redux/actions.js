export function userInfoFetchDataSuccess(data) {
  return {
    type: 'ADD_USER_INFO',
    data,
  };
}

export function userInfoFetchData(id) {
  const secretCode = process.env.REACT_APP_SECRET_CODE;
  if (!secretCode) throw new Error('Missing secret code');
  const url = 'https://twitter-demo.erodionov.ru';

  return (dispatch) => {
    fetch(`${url}/api/v1/accounts/${id}?access_token=${secretCode}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(userInfoFetchDataSuccess(data)));
  };
}

export function tweetsFetchDataSuccess(data) {
  return {
    type: 'ADD_TWEETS',
    data,
  };
}

export function tweetsHasErrored(bool) {
  return {
    type: 'TWEETS_HAS_ERRORED',
    bool,
  };
}

export function tweetsIsLoading(bool) {
  return {
    type: 'TWEETS_IS_LOADING',
    bool,
  };
}

export function tweetsFetchData(id) {
  const secretCode = process.env.REACT_APP_SECRET_CODE;
  if (!secretCode) throw new Error('Missing secret code');
  const url = 'https://twitter-demo.erodionov.ru';

  return (dispatch) => {
    dispatch(tweetsIsLoading(true));

    fetch(`${url}/api/v1/accounts/${id}/statuses?access_token=${secretCode}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(tweetsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(tweetsFetchDataSuccess(data)))
      .catch(() => dispatch(tweetsHasErrored(true)));
  };
}
