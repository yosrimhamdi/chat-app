import { ref, getDatabase, off } from 'firebase/database';

const removeListener = (path, eventType) => {
  const db = getDatabase();
  const collectionRef = ref(db, path);

  off(collectionRef, eventType);
};

export default removeListener;
