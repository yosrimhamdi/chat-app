import { getAuth, onAuthStateChanged } from 'firebase/auth';

const onAuthStateChange = (
  signIn,
  isInitialMount,
  removeLoadingChatSpinner,
) => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      signIn(user);
    }

    if (isInitialMount) {
      removeLoadingChatSpinner();
    }
  });
};
export default onAuthStateChange;
