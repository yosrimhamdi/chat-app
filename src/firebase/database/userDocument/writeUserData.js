import { getAuth } from 'firebase/auth';
import { getDatabase, set, ref } from '@firebase/database';

const writeUserData = async () => {
  const db = getDatabase();
  const { displayName, photoURL, email, uid } = getAuth().currentUser;

  return set(ref(db, 'users/' + uid), {
    uid,
    email,
    displayName,
    photoURL,
    isConnected: true,
  });
};

export default writeUserData;
