import { REGISTER_USER } from '@types';

const INITIAL_STATE = {
  user: null,
  isSignedIn: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        user: action.payload,
        isSignedIn: true,
      };
    default:
      return state;
  }
};

export default auth;
