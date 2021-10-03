import {
  getDatabase,
  ref,
  onValue,
  query,
  equalTo,
  orderByChild,
} from 'firebase/database';

const onAuthUserDocValue = (uid, callback) => {
  const db = getDatabase();
  const usersRef = ref(db, 'users/');

  const q = query(usersRef, orderByChild('uid'), equalTo(uid));

  onValue(q, callback);
};

export default onAuthUserDocValue;
