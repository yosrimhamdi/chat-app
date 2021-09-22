import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { AUTH_LOADING } from '@types';
import updateUserProfile from '../../firebase/updateUserProfile';
import writeData from '../../firebase/database/writeData';

const tryRegister = formValues => async dispatch => {
  const { email, password, username } = formValues;

  dispatch({ type: AUTH_LOADING, payload: true });

  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    toastr.success('Success', 'Registration succeeded');

    const user = await updateUserProfile(username);

    toastr.success('Success', 'Profile updated');

    const { displayName, photoURL } = user;

    await writeData('users/', {
      displayName,
      photoURL,
    });

    toastr.success('Success', 'User added to database');
  } catch (e) {
    toastr.error('Error', e.message);
  }

  dispatch({ type: AUTH_LOADING, payload: false });
};

export default tryRegister;
