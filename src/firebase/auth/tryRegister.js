import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import catcher from '../../catcher';

import updateUserProfile from './updateUserProfile';
import writeData from '../database/writeData';

const tryRegister = async formValues => {
  const { email, password, username } = formValues;

  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password);

  const user = await updateUserProfile(username);

  const { displayName, photoURL } = user;

  await writeData('users/', {
    displayName,
    photoURL,
  });
};

export default catcher(tryRegister);
