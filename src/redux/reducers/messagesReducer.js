import {
  FETCH_MESSAGES,
  SET_MESSAGES_CONTAINER_HEIGHT,
  SET_SEARCH_TERM,
  FETCH_MESSAGE,
  SET_MESSAGES_PATH,
} from '../actions/types';

const INITIAL_STATE = {
  all: [],
  containerHeight: 'auto',
  searchTerm: '',
  path: '',
};

const messagesReducers = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        all: payload,
      };
    case SET_MESSAGES_CONTAINER_HEIGHT:
      return {
        ...state,
        containerHeight: payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload,
      };
    case FETCH_MESSAGE:
      return {
        ...state,
        all: [...state.all, payload],
      };
    case SET_MESSAGES_PATH:
      return {
        ...state,
        path: payload,
      };
    default:
      return state;
  }
};

export default messagesReducers;
