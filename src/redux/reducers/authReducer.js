import { SIGN_OUT, SIGN_IN, UPDATE_USER, FETCH_USERS } from '@types';

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
    case FETCH_USERS: {
      const userDocument = payload.find(user => user.uid == state.user.uid);

      return { ...state, userDocument };
    }
    case UPDATE_USER: {
      if (payload.uid == state.user.uid) {
        return { ...state, userDocument: payload };
      }

      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
