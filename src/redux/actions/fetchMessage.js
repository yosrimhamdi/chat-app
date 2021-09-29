import { FETCH_MESSAGE } from '@types';

const fetchMessage = message => ({
  type: FETCH_MESSAGE,
  payload: message,
});

export default fetchMessage;
