import { ref, getDatabase, off } from 'firebase/database';

const removeCollectionListener = collectionRef => {
  const db = getDatabase();
  const dbRef = ref(db, collectionRef);

  off(dbRef);
};

export default removeCollectionListener;
