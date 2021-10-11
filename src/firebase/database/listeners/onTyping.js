import {
  getDatabase,
  ref,
  onChildAdded,
  onChildRemoved,
} from 'firebase/database';

const onTyping = (channelId, setTyping, removeTyping) => {
  const db = getDatabase();
  const typingRef = ref(db, `typing/${channelId}`);

  onChildAdded(typingRef, setTyping);
  onChildRemoved(typingRef, removeTyping);
};

export default onTyping;
