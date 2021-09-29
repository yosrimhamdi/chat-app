import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const startChannel = channelId => {
  const { currentUser } = getAuth();
  const db = getDatabase();
  const starredChannelRef = ref(
    db,
    'users/' + currentUser.uid + '/starredChannels/' + channelId + '/',
  );

  set(starredChannelRef, {
    starredAt: Date.now(),
  });
};

export default startChannel;
