import { SIGN_IN } from '@types';
import history from '../../history';

const signIn = user => {
  history.push('/');

  return { type: SIGN_IN, payload: user };
};

export default signIn;
