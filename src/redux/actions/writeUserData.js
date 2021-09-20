import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import firebaseApp from '../../firebase';

const writeUserData = async () => {
  const auth = getAuth();
  const db = getDatabase(firebaseApp);
  const { uid, displayName, photoURL } = auth.currentUser;

  try {
    await set(ref(db, 'users/' + uid), {
      displayName,
      photoURL,
    });
  } catch (e) {
    console.log(e);
  }
};

export default writeUserData;
