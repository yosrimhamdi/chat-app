import { getDatabase, ref, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const selectTheme = themeId => {
  const { currentUser } = getAuth();
  const db = getDatabase();

  const userRef = ref(db, 'users/' + currentUser.uid + '/themes/' + themeId);

  update(userRef, {
    isSelected: true,
  });
};

export default selectTheme;
