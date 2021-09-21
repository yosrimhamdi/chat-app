import md5 from 'md5';
import { getAuth, updateProfile as update } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import { UPDATE_PROFILE } from '@types';
import writeUserData from '../../database/writeUserData';

const updateProfile = (username, email) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();

      await update(auth.currentUser, {
        displayName: username,
        photoURL: `//0.gravatar.com/avatar/${md5(email)}?s=200&d=identicon`,
      });

      toastr.success('Success', 'Profile name & image updated');
      dispatch({
        type: UPDATE_PROFILE,
        payload: auth.currentUser,
      });
    } catch (e) {
      toastr.error('Success', e.message);
    }

    writeUserData();
  };
};

export default updateProfile;
