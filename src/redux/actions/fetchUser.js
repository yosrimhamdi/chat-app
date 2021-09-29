import { FETCH_USER } from '@types';

const fetchUser = user => ({
  type: FETCH_USER,
  payload: user,
});

export default fetchUser;
