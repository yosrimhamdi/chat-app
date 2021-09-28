import {
  FETCH_MESSAGE,
  SET_MESSAGES_CONTAINER_HEIGHT,
  SET_SEARCH_TERM,
  SET_MESSAGES_PATH,
} from '../actions/types';

const INITIAL_STATE = {
  all: [],
  containerHeight: 'auto',
  searchTerm: '',
  path: '',
};

const messagesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGE:
      return {
        ...state,
        all: [...state.all, action.payload],
      };
    case SET_MESSAGES_CONTAINER_HEIGHT:
      return {
        ...state,
        containerHeight: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_MESSAGES_PATH:
      return {
        ...state,
        path: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducers;
