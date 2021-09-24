import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import catcher from '../../catcher';

const tryRegister = async (email, password) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password);
};

export default catcher(tryRegister);
