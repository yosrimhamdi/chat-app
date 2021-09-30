import { FETCH_USER } from '@types';

const fetchUser = snap => ({
  type: FETCH_USER,
  payload: snap.val(),
});

export default fetchUser;
