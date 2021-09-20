import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import firebase from '../../firebase';
import { REGISTER_USER, AUTH_LOADING } from '@types';
import updateProfile from './updateUserProfile';

const registerUser = ({ email, password, username }) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING, payload: true });

    const auth = getAuth(firebase);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(updateProfile(username, email));

      dispatch({
        type: REGISTER_USER,
        payload: user,
      });
    } catch (e) {
      toastr.error('Error', e.message);
    }

    dispatch({ type: AUTH_LOADING, payload: false });
  };
};

export default registerUser;
