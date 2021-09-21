import { TRY_REGISTER, AUTH_LOADING, TRY_LOGIN, SIGN_OUT } from '@types';

const INITIAL_STATE = {
  user: null,
  isSignedIn: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRY_REGISTER:
    case TRY_LOGIN:
      return {
        ...state,
        user: action.payload,
        isSignedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        isSignedIn: false,
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
