import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import { REGISTER, AUTH_LOADING } from '@types';
import updateProfile from './updateProfile';

const register = ({ email, password, username }) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING, payload: true });

    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(updateProfile(username, email));
      toastr.success('Success', 'registration succeeded');
      dispatch({
        type: REGISTER,
        payload: user,
      });
    } catch (e) {
      toastr.error('Success', e.message);
    }

    dispatch({ type: AUTH_LOADING, payload: false });
    dispatch(reset('registerForm'));
  };
};

export default register;
