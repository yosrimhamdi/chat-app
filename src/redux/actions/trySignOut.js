import { getAuth, signOut } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { SIGN_OUT } from '@types';

const trySignOut = () => {
  return async (dispatch) => {
    const auth = getAuth();
    try {
      await signOut(auth);

      dispatch({ type: SIGN_OUT });
      toastr.error('Success', 'Signed Out');
    } catch (e) {
      toastr.error('Error', e.message);
    }
  };
};

export default trySignOut;
