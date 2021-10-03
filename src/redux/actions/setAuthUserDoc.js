import { AUTH_USER_DOCUMENT } from '@types';

const setAuthUserDoc = snap => ({
  type: AUTH_USER_DOCUMENT,
  payload: snap.val(),
});

export default setAuthUserDoc;
