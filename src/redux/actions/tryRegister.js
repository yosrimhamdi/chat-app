import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { AUTH_LOADING } from '@types';
import updateProfile from './updateProfile';
import writeUserData from '../../database/writeUserData';

const tryRegister = ({ email, password, username }) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING, payload: true });

    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      toastr.success('Success', 'Registration Succeed');
      updateProfile(username);
      writeUserData();
    } catch (e) {
      toastr.error('Error', e.message);
    }

    dispatch({ type: AUTH_LOADING, payload: false });
  };
};

export default tryRegister;
