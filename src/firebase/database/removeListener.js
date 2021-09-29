import { ref, getDatabase, off } from 'firebase/database';

const removeListener = (path, callback) => {
  const db = getDatabase();
  const collectionRef = ref(db, path);

  off(collectionRef, callback);
};

export default removeListener;
