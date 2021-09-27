import { FETCH_USERS } from '@types';

const fetchUsers = users => ({
  type: FETCH_USERS,
  payload: users,
});

export default fetchUsers;
