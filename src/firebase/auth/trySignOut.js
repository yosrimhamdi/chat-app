import { getAuth, signOut } from 'firebase/auth';
import catcher from '../../catcher';
import setDisconnected from '../database/setDisconnected';

const trySignOut = async signOutActionCreator => {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  await signOut(auth);

  setDisconnected(uid);

  signOutActionCreator();
};

export default catcher(trySignOut);
