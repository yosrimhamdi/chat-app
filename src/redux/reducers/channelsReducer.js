import { FETCH_CHANNEL, SELECT_CHANNEL } from '@types';

const INITIAL_STATE = {
  selectedChannel: {},
  all: [],
};

const channelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHANNEL:
      return {
        ...state,
        all: [...state.all, action.payload],
        selectedChannel: action.payload,
      };
    case SELECT_CHANNEL:
      return {
        ...state,
        selectedChannel: action.payload,
      };
    default:
      return state;
  }
};

export default channelsReducer;
