import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { AUTH_LOADING } from '@types';

const tryLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_LOADING, payload: true });

      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      toastr.success('Success', ' Logged in');
    } catch (e) {
      toastr.error('Error', e.message);
    }

    dispatch({ type: AUTH_LOADING, payload: false });
  };
};
export default tryLogin;
