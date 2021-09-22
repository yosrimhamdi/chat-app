import { getAuth, onAuthStateChanged } from 'firebase/auth';

const onAuthStateChange = signIn => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      signIn(user);
    }
  });
};
export default onAuthStateChange;
