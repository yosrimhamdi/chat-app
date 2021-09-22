import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import updateUserProfile from './updateUserProfile';
import writeData from '../database/writeData';

const tryRegister = async formValues => {
  const { email, password, username } = formValues;

  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    const user = await updateUserProfile(username);

    const { displayName, photoURL } = user;

    await writeData('users/', {
      displayName,
      photoURL,
    });
  } catch (e) {
    toastr.error('Error', e.message);
  }
};

export default tryRegister;
