export function userInfoFetchDataSuccess(data) {
  return {
    type: 'ADD_USER_INFO',
    data,
  };
}

export function userInfoFetchData(url, id) {
  const secretCode = process.env.REACT_APP_SECRET_CODE;
  if (!secretCode) throw new Error('Missing secret code');
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
