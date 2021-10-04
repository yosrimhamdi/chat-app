import { getDatabase, ref, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const updateDBUserPhoto = async photoURL => {
  const { currentUser } = getAuth();
  const db = getDatabase();

  const userRef = ref(db, `users/${currentUser.uid}`);

  return await update(userRef, { photoURL });
};

export default updateDBUserPhoto;
