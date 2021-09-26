import { FETCH_MESSAGES, SET_MESSAGES_DIV_HEIGHT } from '../actions/types';

const INITIAL_STATE = {
  all: [],
  height: 'auto',
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
        height: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducers;
