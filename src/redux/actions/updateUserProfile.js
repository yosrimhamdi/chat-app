import md5 from 'md5';
import { toastr } from 'react-redux-toastr';
import { getAuth, updateProfile as update } from 'firebase/auth';

import { UPDATE_PROFILE } from '@types';

const updateProfile = (username, email) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();

      await update(auth.currentUser, {
        displayName: username,
        photoURL: `http://gravatar.com/avatar/${md5(email)}?d=indenticon`,
      });

      dispatch({
        type: UPDATE_PROFILE,
        payload: auth.currentUser,
      });
    } catch (e) {
      toastr.error('Error', e.message);
    }
  };
};

export default updateProfile;
