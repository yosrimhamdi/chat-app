import {
  SENDING_MESSAGE,
  AUTHENTICATING,
  APP_MOUNTED,
  UPLOADING_FILE,
  CREATING_CHANNEL,
  SEARCHING,
} from '@types';

const INITIAL_STATE = {
  isSendingMessage: false,
  isAuthenticating: false,
  isInitialMount: true,
  isUploading: false,
  isCreatingChannel: false,
  isSearching: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SENDING_MESSAGE:
      return {
        ...state,
        isSendingMessage: action.payload,
      };
    case CREATING_CHANNEL:
      return {
        ...state,
        isCreatingChannel: action.payload,
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
    case UPLOADING_FILE:
      return {
        ...state,
        isUploading: action.payload,
      };
    case SEARCHING:
      return {
        ...state,
        isSearching: action.payload,
      };
    default:
      return state;
  }
};

export default loadingReducer;
