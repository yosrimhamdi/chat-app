import { REGISTER_USER, AUTH_LOADING } from '@types';

const INITIAL_STATE = {
  user: null,
  isSignedIn: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
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
