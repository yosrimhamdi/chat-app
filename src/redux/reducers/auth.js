import { REGISTER, AUTH_LOADING, SIGN_IN } from '@types';

const INITIAL_STATE = {
  user: null,
  isSignedIn: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER:
    case SIGN_IN:
      return {
        user: action.payload,
        isSignedIn: true,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
