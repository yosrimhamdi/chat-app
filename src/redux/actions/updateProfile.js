import md5 from 'md5';
import { getAuth, updateProfile as update } from 'firebase/auth';

import { UPDATE_PROFILE } from '@types';
import writeUserData from './writeUserData';

const updateProfile = (username, email) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();

      await update(auth.currentUser, {
        displayName: username,
        photoURL: `//0.gravatar.com/avatar/${md5(email)}?s=200&d=identicon`,
      });

      dispatch({
        type: UPDATE_PROFILE,
        payload: auth.currentUser,
      });
    } catch (e) {
      console.log(e);
    }

    writeUserData();
  };
};

export default updateProfile;
