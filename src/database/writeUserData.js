import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { toastr } from 'react-redux-toastr';

const writeUserData = async () => {
  const auth = getAuth();
  const db = getDatabase();
  const { uid, displayName, photoURL } = auth.currentUser;

  try {
    await set(ref(db, 'users/' + uid), {
      displayName,
      photoURL,
    });

    toastr.success('Success', 'User Wrote to database');
  } catch (e) {
    toastr.error('Success', e.message);
  }
};

export default writeUserData;
