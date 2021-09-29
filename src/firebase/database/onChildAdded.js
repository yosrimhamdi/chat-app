import {
  getDatabase,
  ref,
  onChildAdded,
  orderByChild,
  query,
  startAt,
} from 'firebase/database';

const onCollectionChildAdded = (path, handleChildAdded) => {
  const db = getDatabase();
  const collectionRef = ref(db, path);

  onChildAdded(
    query(collectionRef, orderByChild('createdAt'), startAt(Date.now())),
    handleChildAdded,
  );
};

export default onCollectionChildAdded;
