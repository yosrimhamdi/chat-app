import {
  getDatabase,
  ref,
  onValue,
  query,
  equalTo,
  orderByChild,
} from 'firebase/database';

const onAuthUserDBValue = async () => {
  const db = getDatabase();
  const usersRef = ref(db, 'users/');

  const q = query(
    usersRef,
    orderByChild('uid'),
    equalTo('bxA1U0Cly0gBvTPZZReLnW3gtf53'),
  );

  onValue(q, snap => {
    console.log(snap.val());
  });
};

export default onAuthUserDBValue;
