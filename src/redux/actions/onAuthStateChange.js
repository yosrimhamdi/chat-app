import { getAuth, onAuthStateChanged } from 'firebase/auth';
import history from '../../history';

import { SIGN_IN, AUTH_LOADING } from '@types';

const onAuthStateChange = () => dispatch => {
  dispatch({ type: AUTH_LOADING, payload: true });

  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch({ type: SIGN_IN, payload: user });
      dispatch({ type: AUTH_LOADING, payload: false });

      history.push('/');
    }
  });
};
export default onAuthStateChange;
