import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { getState } from '../../redux/store';
import signIn from '@actions/signIn';
import removeLoadingChatSpinner from '@actions/removeLoadingChatSpinner';

const onAuthStateChange = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      signIn(user);
    }

    if (getState().loading.isInitialMount) {
      removeLoadingChatSpinner();
    }
  });
};
export default onAuthStateChange;
