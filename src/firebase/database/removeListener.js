import { ref, getDatabase, off } from 'firebase/database';

const removeListener = path => {
  const db = getDatabase();
  const collectionRef = ref(db, path);

  off(collectionRef);
};

export default removeListener;
