import firebaseApp from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { reset } from 'redux-form';

import { AUTH_LOADING, SIGN_IN } from '@types';

const login = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AUTH_LOADING, payload: true });

      const auth = getAuth(firebaseApp);
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type: SIGN_IN,
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
