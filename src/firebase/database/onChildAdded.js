import {
  getDatabase,
  ref,
  onChildAdded,
  orderByChild,
  query,
  startAt,
} from 'firebase/database';

const onCollectionChildAdded = (path, creator) => {
  const db = getDatabase();
  const collectionRef = ref(db, path);

  onChildAdded(
    query(collectionRef, orderByChild('createdAt'), startAt(Date.now())),
    snap => {
      creator(snap.val());
    },
  );
};

export default onCollectionChildAdded;
