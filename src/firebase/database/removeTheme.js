import { getAuth } from '@firebase/auth';
import { getDatabase, ref, remove } from '@firebase/database';

const removeTheme = themeId => {
  const db = getDatabase();
  const { currentUser } = getAuth();

  const themeRef = ref(db, `users/${currentUser.uid}/themes/${themeId}`);

  remove(themeRef);
};

export default removeTheme;
