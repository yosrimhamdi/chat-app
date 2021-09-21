import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { TRY_AUTO_LOGIN } from '@types';

const tryAutoLogin = () => {
  return (dispatch) => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: TRY_AUTO_LOGIN,
          payload: user,
        });
      }
    });
  };
};

export default tryAutoLogin;
