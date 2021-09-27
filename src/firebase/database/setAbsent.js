import { getDatabase, ref, update } from 'firebase/database';

const setAbsent = uid => {
  const db = getDatabase();
  const userRef = ref(db, 'users/' + uid);

  update(userRef, {
    isConnected: false,
  });
};

export default setAbsent;
