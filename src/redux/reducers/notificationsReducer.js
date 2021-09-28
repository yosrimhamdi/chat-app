import { SET_NEW_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions/types';

const notificationsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_NEW_NOTIFICATION: {
      const channelId = action.payload;

      if (state[channelId]) {
        state[channelId] = state[channelId] + 1;
      } else {
        state[channelId] = 1;
      }

      return { ...state };
    }
    case CLEAR_NOTIFICATION:
      state[action.payload] = 0;

      return { ...state };
    default:
      return state;
  }
};

export default notificationsReducer;
