import { getDatabase, ref, onValue } from 'firebase/database';

const onCollectionChange = (path, handleCollectionChange) => {
  const db = getDatabase();
  const collectionRef = ref(db, path);

  onValue(collectionRef, handleCollectionChange);
};

export default onCollectionChange;
