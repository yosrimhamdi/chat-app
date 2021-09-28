import { getDatabase, ref, onChildAdded } from 'firebase/database';

const onNewChannelMessage = (channelId, setNotification) => {
  const db = getDatabase();
  const channelRef = ref(db, 'messages/public/' + channelId);

  onChildAdded(channelRef, () => {
    setNotification(channelId);
  });
};

export default onNewChannelMessage;
