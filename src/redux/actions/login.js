import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { reset } from 'redux-form';

import { AUTH_LOADING, LOGIN } from '@types';

const login = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_LOADING, payload: true });

      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type: LOGIN,
        payload: user,
      });
    } catch (e) {
      console.log(e);
    }

    dispatch({ type: AUTH_LOADING, payload: false });
    dispatch(reset('loginForm'));
  };
};
export default login;
