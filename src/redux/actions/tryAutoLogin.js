import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { LOGIN } from '@types';

const tryAutoLogin = () => {
  return (dispatch) => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: LOGIN,
          payload: user,
        });
      }
    });
  };
};

export default tryAutoLogin;
