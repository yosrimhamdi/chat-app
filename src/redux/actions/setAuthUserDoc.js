import { AUTH_USER_DOCUMENT } from '@types';

const setAuthUserDoc = snap => ({
  type: AUTH_USER_DOCUMENT,
  payload: Object.values(snap.val())[0],
});

export default setAuthUserDoc;
