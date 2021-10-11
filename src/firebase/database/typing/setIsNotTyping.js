import { getDatabase, ref, remove } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const setIsNotTyping = channelId => {
  const { uid } = getAuth().currentUser;
  const db = getDatabase();
  const typingRef = ref(db, `typing/${channelId}/${uid}/`);

  remove(typingRef);
};

export default setIsNotTyping;
