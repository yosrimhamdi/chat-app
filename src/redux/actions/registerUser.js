import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

import firebase from '../../firebase';
import { REGISTER_USER, AUTH_LOADING } from '@types';
import { reset } from 'redux-form';

const registerUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING, payload: true });
    dispatch(reset('registerForm'));

    const auth = getAuth(firebase);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: REGISTER_USER,
        payload: userCredential.user,
      });
    } catch (e) {
      toastr.error('Error', e.message);
    }

    dispatch({ type: AUTH_LOADING, payload: false });
  };
};

export default registerUser;
