import { getAuth, onAuthStateChanged } from 'firebase/auth';

const onAuthStateChange = (signIn, removeLoadingChatSpinner) => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      signIn(user);
    }

    removeLoadingChatSpinner();
  });
};
export default onAuthStateChange;
