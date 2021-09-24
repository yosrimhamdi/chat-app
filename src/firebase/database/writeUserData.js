import { getAuth } from 'firebase/auth';

import catcher from '../../catcher';
import writeData from './writeData';

const writeUserData = async () => {
  const { currentUser } = getAuth();
  const { displayName, photoURL, email } = currentUser;

  await writeData('users/', {
    displayName,
    photoURL,
    email,
  });
};

export default catcher(writeUserData);
