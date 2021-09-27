import {
  FETCH_MESSAGES,
  SET_MESSAGES_CONTAINER_HEIGHT,
  SET_SEARCH_TERM,
} from '../actions/types';

const INITIAL_STATE = {
  all: [],
  containerHeight: 'auto',
  searchTerm: '',
};

const messagesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        all: action.payload,
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
    default:
      return state;
  }
};

export default messagesReducers;
