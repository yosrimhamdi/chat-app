import { FETCH_CHANNEL } from '@types';

const fetchChannel = channel => ({
  type: FETCH_CHANNEL,
  payload: channel,
});

export default fetchChannel;
