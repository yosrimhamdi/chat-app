import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { AUTH_LOADING } from '@types';
import updateProfile from './updateProfile';
import writeUserData from '../../database/writeUserData';

const tryRegister = formValues => async dispatch => {
  const { email, password, username } = formValues;

  dispatch({ type: AUTH_LOADING, payload: true });

  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    toastr.success('Success', 'Registration Succeed');
    updateProfile(username);
    writeUserData();
  } catch (e) {
    toastr.error('Error', e.message);
  }

  dispatch({ type: AUTH_LOADING, payload: false });
};

export default tryRegister;
