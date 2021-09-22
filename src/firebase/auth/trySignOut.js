import { getAuth, signOut } from 'firebase/auth';
import catcher from '../../catcher';

const trySignOut = async signOutActionCreator => {
  const auth = getAuth();
  await signOut(auth);

  signOutActionCreator();
};

export default catcher(trySignOut);
