import { getAuth, signOut } from 'firebase/auth';
import catcher from '../../catcher';
import setAbsent from '../database/setAbsent';

const trySignOut = async signOutActionCreator => {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  await signOut(auth);

  setAbsent(uid);

  signOutActionCreator();
};

export default catcher(trySignOut);
