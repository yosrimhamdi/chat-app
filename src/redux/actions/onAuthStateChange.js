import { getAuth, onAuthStateChanged } from 'firebase/auth';
import history from '../../history';

import { SIGN_IN } from '@types';

const onAuthStateChange = () => dispatch => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch({ type: SIGN_IN, payload: user });

      history.push('/');
    }
  });
};
export default onAuthStateChange;
