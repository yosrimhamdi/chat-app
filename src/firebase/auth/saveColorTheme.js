import { getDatabase, ref, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const saveColorTheme = async theme => {
  const { currentUser } = getAuth();
  const db = getDatabase();

  const userRef = ref(db, 'users/' + currentUser.uid);

  return await update(userRef, { theme });
};

export default saveColorTheme;
