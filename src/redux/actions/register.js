import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import firebaseApp from '../../firebase';
import { REGISTER, AUTH_LOADING } from '@types';
import updateProfile from './updateProfile';

const register = ({ email, password, username }) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING, payload: true });

    const auth = getAuth(firebaseApp);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(updateProfile(username, email));

      dispatch({
        type: REGISTER,
        payload: user,
      });
    } catch (e) {
      console.log(e);
    }

    dispatch({ type: AUTH_LOADING, payload: false });
  };
};

export default register;
