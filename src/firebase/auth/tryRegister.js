import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import updateUserProfile from './updateUserProfile';
import writeData from '../database/writeData';

const tryRegister = async formValues => {
  const { email, password, username } = formValues;

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
};

export default tryRegister;
