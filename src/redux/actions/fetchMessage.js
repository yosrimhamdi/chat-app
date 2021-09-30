import { FETCH_MESSAGE } from '@types';

const fetchMessage = snap => ({
  type: FETCH_MESSAGE,
  payload: snap.val(),
});

export default fetchMessage;
