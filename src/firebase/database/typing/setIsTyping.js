import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const setIsTyping = channelId => {
  const { uid, displayName, photoURL } = getAuth().currentUser;
  const db = getDatabase();
  const typingRef = ref(db, `typing/${channelId}/${uid}/`);

  set(typingRef, { displayName, photoURL });
};

export default setIsTyping;
