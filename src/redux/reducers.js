import { combineReducers } from 'redux';

const profile = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case 'ADD_USER_INFO':
      return { ...state, userInfo: action.data };
    default:
      return state;
  }
};

const tweets = (state = { tweets: [], hasErrored: false, isLoading: false }, action) => {
  switch (action.type) {
    case 'ADD_TWEETS':
      return { ...state, tweets: action.data };
    case 'TWEETS_HAS_ERRORED':
      return { ...state, hasErrored: action.bool };
    case 'TWEETS_IS_LOADING':
      return { ...state, isLoading: action.bool };
    default:
      return state;
  }
};

export default combineReducers({
  profile,
  tweets,
});
