import { FETCH_CHANNELS } from '@types';

const fetchComment = channels => {
  return {
    type: FETCH_CHANNELS,
    payload: channels,
  };
};

export default fetchComment;
