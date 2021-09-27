import { getDatabase, ref, onValue } from 'firebase/database';

const onCollectionChange = (collectionName, handleCollectionChange) => {
  const db = getDatabase();
  const collectionRef = ref(db, collectionName);

  onValue(collectionRef, handleCollectionChange);
};

export default onCollectionChange;
