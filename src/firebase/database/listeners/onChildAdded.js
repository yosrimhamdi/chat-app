import {
  getDatabase,
  ref,
  onChildAdded,
  orderByChild,
  query,
  startAt,
} from 'firebase/database';

const onCollectionChildAdded = (path, callback) => {
  const db = getDatabase();
  const r = ref(db, path);

  const q = query(r, orderByChild('createdAt'), startAt(Date.now()));

  onChildAdded(q, callback);
};

export default onCollectionChildAdded;
