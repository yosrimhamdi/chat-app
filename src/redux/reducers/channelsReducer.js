import { FETCH_CHANNELS, SELECT_CHANNEL } from '@types';

const INITIAL_STATE = {
  selectedChannel: null,
  all: [],
};

const channelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHANNELS:
      return {
        ...state,
        all: action.payload,
        selectedChannel: action.payload[0],
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
