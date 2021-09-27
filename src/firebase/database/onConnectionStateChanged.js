import {
  getDatabase,
  set,
  ref,
  onValue,
  onDisconnect,
} from 'firebase/database';
import { getAuth } from '@firebase/auth';

const onConnectionStateChanged = () => {
  const db = getDatabase();
  const connectedRef = ref(db, '.info/connected');

  onValue(connectedRef, snap => {
    const { currentUser } = getAuth();

    const presenceRef = ref(db, 'presence/' + currentUser.uid);

    if (snap.val() == true) {
      set(presenceRef, true);

      onDisconnect(presenceRef).remove();
    } else {
      console.log('disconnected');
    }
  });
};

export default onConnectionStateChanged;
