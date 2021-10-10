import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const trySignIn = async formValues => {
  const { email, password } = formValues;

  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
};

export default trySignIn;
