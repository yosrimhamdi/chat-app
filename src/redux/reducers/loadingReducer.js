import { SENDING_MESSAGE } from '@types';

const INITIAL_STATE = {
  isSendingMessage: false,
  isAuthenticating: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SENDING_MESSAGE:
      return {
        ...state,
        isSendingMessage: action.payload,
      };

    default:
      return state;
  }
};

export default loadingReducer;
