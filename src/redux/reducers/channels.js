import { FETCH_CHANNELS } from '@types';

const channels = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHANNELS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default channels;
