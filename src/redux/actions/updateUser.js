import { UPDATE_USER } from './types';

const updateUser = snap => ({
  type: UPDATE_USER,
  payload: snap.val(),
});

export default updateUser;
