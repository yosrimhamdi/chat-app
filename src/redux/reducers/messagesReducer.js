import { FETCH_MESSAGES } from '../actions/types';

const messagesReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

export default messagesReducers;
