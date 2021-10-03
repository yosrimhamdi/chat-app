import { SIGN_OUT, SIGN_IN } from '@types';

const INITIAL_STATE = {
  user: null,
  isLoggedIn: false,
  userDocument: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
