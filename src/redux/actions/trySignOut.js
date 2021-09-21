import { getAuth, signOut } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { SIGN_OUT } from '@types';

const trySignOut = () => async dispatch => {
  try {
    const auth = getAuth();
    await signOut(auth);

    dispatch({ type: SIGN_OUT });
    toastr.success('Success', 'Signed Out');
  } catch (e) {
    toastr.error('Error', e.message);
  }
};

export default trySignOut;
