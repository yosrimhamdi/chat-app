import { FETCH_CHANNEL } from '@types';

const fetchChannel = snap => ({
  type: FETCH_CHANNEL,
  payload: snap.val(),
});

export default fetchChannel;
