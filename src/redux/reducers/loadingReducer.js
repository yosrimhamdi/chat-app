import {
  SENDING_MESSAGE,
  AUTHENTICATING,
  APP_MOUNTED,
  UPLOADING_FILE,
  CREATING_CHANNEL,
  SEARCHING,
  FETCHING_MESSAGES,
} from '@types';

const INITIAL_STATE = {
  isSendingMessage: false,
  isAuthenticating: false,
  isInitialMount: true,
  isUploading: false,
  isCreatingChannel: false,
  isSearching: false,
  isFetchingMessages: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SENDING_MESSAGE:
      return {
        ...state,
        isSendingMessage: payload,
      };
    case CREATING_CHANNEL:
      return {
        ...state,
        isCreatingChannel: payload,
      };
    case AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: payload,
      };
    case APP_MOUNTED:
      return {
        ...state,
        isInitialMount: false,
      };
    case UPLOADING_FILE:
      return {
        ...state,
        isUploading: payload,
      };
    case SEARCHING:
      return {
        ...state,
        isSearching: payload,
      };
    case FETCHING_MESSAGES:
      return {
        ...state,
        isFetchingMessages: payload,
      };
    default:
      return state;
  }
};

export default loadingReducer;
