import { getAuth, onAuthStateChanged } from 'firebase/auth';

const onAuthStateChange = (signIn, isInitialMount, removeMountSpinner) => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      signIn(user);
    }

    if (isInitialMount) {
      removeMountSpinner();
    }
  });
};
export default onAuthStateChange;
