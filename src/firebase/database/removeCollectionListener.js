import { ref, getDatabase, off } from 'firebase/database';

const removeCollectionListener = collectionName => {
  const db = getDatabase();
  const dbRef = ref(db, collectionName);

  off(dbRef);
};

export default removeCollectionListener;
