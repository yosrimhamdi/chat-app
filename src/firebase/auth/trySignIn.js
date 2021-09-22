import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toastr } from 'react-redux-toastr';

const trySignIn = async formValues => {
  const { email, password } = formValues;

  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    toastr.error('Error', e.message);
  }
};
export default trySignIn;
