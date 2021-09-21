import { CREATE_CHANNEL } from '@types';

const channels = (state = [], action) => {
  switch (action.type) {
    case CREATE_CHANNEL: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default channels;
