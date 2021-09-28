import { getDatabase, ref, onChildAdded } from 'firebase/database';

const onCollectionChildAdded = (path, handleCollectionChange) => {
  const db = getDatabase();
  const collectionRef = ref(db, path);

  onChildAdded(collectionRef, handleCollectionChange);
};

export default onCollectionChildAdded;
