import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import catcher from '../../catcher';

const tryRegister = async (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export default catcher(tryRegister);
