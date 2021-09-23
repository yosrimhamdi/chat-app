import { SIGN_IN } from '@types';
import history from '../../history';
import { dispatch } from '../store';

const signIn = user => {
  history.push('/');

  dispatch({ type: SIGN_IN, payload: user });
};

export default signIn;
