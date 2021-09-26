import { getAuth } from 'firebase/auth';

import catcher from '../../catcher';
import writeData from './writeData';

const writeUserData = async () => {
  const { displayName, photoURL, email } = getAuth().currentUser;

  await writeData('users/', {
    displayName,
    photoURL,
    email,
  });
};

export default catcher(writeUserData);
