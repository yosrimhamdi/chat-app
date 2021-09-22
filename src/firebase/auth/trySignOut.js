import { getAuth, signOut } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

const trySignOut = async signOutActionCreator => {
  try {
    const auth = getAuth();
    await signOut(auth);

    signOutActionCreator();
  } catch (e) {
    toastr.error('Error', e.message);
  }
};

export default trySignOut;
