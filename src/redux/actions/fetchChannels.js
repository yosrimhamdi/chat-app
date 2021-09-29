import { FETCH_CHANNELS } from '@types';

const fetchComment = channels => ({
  type: FETCH_CHANNELS,
  payload: channels,
});

export default fetchComment;
