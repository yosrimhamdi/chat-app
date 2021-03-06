import { getAuth, signOut } from 'firebase/auth';
import setDisconnected from '../database/userDocument/setDisconnected';

const trySignOut = async signOutActionCreator => {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  await signOut(auth);

  setDisconnected(uid);

  signOutActionCreator();
};

export default trySignOut;
