import { combineReducers } from 'redux';

const profile = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case 'ADD_USER_INFO':
      return { ...state, userInfo: action.data };
    default:
      return state;
  }
};

export default combineReducers({
  profile,
});
