import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import catcher from '../../catcher';

const trySignIn = async formValues => {
  const { email, password } = formValues;

  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
};

export default catcher(trySignIn);
