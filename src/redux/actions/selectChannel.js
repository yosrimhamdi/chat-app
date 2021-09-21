import { SELECT_CHANNEL } from './types';

const selectChannel = channel => {
  return {
    type: SELECT_CHANNEL,
    payload: channel,
  };
};

export default selectChannel;
