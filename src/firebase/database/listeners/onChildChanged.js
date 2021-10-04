import { getDatabase, ref, onChildChanged } from 'firebase/database';

const onUsersChildChanged = callback => {
  const db = getDatabase();
  const usersRef = ref(db, 'users/');

  onChildChanged(usersRef, callback);
};

export default onUsersChildChanged;
