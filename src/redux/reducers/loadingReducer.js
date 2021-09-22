import { SENDING_MESSAGE, AUTHENTICATING, APP_MOUNTED } from '@types';

const INITIAL_STATE = {
  isSendingMessage: false,
  isAuthenticating: false,
  isInitialMount: true,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SENDING_MESSAGE:
      return {
        ...state,
        isSendingMessage: action.payload,
      };
    case AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.payload,
      };
    case APP_MOUNTED:
      return {
        ...state,
        isInitialMount: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
