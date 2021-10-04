import {
  getDatabase,
  ref,
  update,
  onValue,
  onDisconnect,
} from 'firebase/database';
import { getAuth } from '@firebase/auth';

const onConnectionStateChanged = () => {
  const db = getDatabase();
  const connectedRef = ref(db, '.info/connected');

  onValue(connectedRef, snap => {
    const { currentUser } = getAuth();

    const userRef = ref(db, 'users/' + currentUser.uid);

    if (snap.val() == true) {
      update(userRef, {
        isConnected: true,
      });

      onDisconnect(userRef).update({
        isConnected: false,
      });
    }
  });
};

export default onConnectionStateChanged;
