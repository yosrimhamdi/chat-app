import {
  FETCH_CHANNELS,
  SELECT_CHANNEL,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATIONS,
} from '@types';
import { FETCH_CHANNEL } from '../actions/types';

const INITIAL_STATE = {
  selectedChannel: {},
  all: [],
  notifications: {},
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
    case SET_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload]: state.notifications[action.payload]
            ? state.notifications[action.payload] + 1
            : 1,
        },
      };
    case CLEAR_NOTIFICATIONS:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload]: 0,
        },
      };
    default:
      return state;
  }
};

export default channelsReducer;
