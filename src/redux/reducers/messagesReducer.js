import { FETCH_MESSAGES, SET_MESSAGES_DIV_HEIGHT } from '../actions/types';

const INITIAL_STATE = {
  all: [],
  containerHeight: 'auto',
};

const messagesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        all: action.payload,
      };
    case SET_MESSAGES_DIV_HEIGHT:
      return {
        ...state,
        containerHeight: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducers;
