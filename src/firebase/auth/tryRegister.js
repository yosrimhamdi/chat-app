import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const tryRegister = async (email, password) => {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
};

export default tryRegister;
