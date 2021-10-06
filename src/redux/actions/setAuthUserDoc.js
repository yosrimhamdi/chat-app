import { AUTH_USER_DOCUMENT } from '@types';

const setAuthUserDoc = snap => {
  const doc = snap.val();

  if (!doc) {
    return { type: '' };
  }

  return {
    type: AUTH_USER_DOCUMENT,
    payload: Object.values(snap.val())[0],
  };
};

export default setAuthUserDoc;
