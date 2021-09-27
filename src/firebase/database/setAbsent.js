import { getDatabase, ref, remove } from 'firebase/database';

const setAbsent = uid => {
  const db = getDatabase();
  const presenceRef = ref(db, 'presence/' + uid);

  remove(presenceRef);
};

export default setAbsent;
