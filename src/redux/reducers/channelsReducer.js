import { FETCH_CHANNELS, SELECT_CHANNEL } from '@types';
import { FETCH_CHANNEL } from '../actions/types';

const INITIAL_STATE = {
  selectedChannel: {},
  all: [],
};

const channelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHANNELS:
      return {
        ...state,
        all: action.payload,
        selectedChannel: action.payload.length ? action.payload[0] : {},
      };
    case FETCH_CHANNEL:
      return {
        ...state,
        all: [...state.all, action.payload],
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
