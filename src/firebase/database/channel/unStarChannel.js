import { getDatabase, ref, remove } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const unStarChannel = channelId => {
  const { currentUser } = getAuth();
  const db = getDatabase();
  const starredChannelRef = ref(
    db,
    'users/' + currentUser.uid + '/starredChannels/' + channelId + '/',
  );

  remove(starredChannelRef);
};

export default unStarChannel;
