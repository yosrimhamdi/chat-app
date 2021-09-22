import { getAuth } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

const trySignOut = async signOut => {
  try {
    const auth = getAuth();
    await signOut(auth);

    signOut();
  } catch (e) {
    toastr.error('Error', e.message);
  }
};

export default trySignOut;
