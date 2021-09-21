import { getDatabase, ref, onValue } from 'firebase/database';

import { FETCH_CHANNELS } from './types';

const onChannelChange = () => dispatch => {
  const db = getDatabase();
  const channelsRef = ref(db, 'channels/');

  onValue(channelsRef, snapshot => {
    const channels = snapshot.val();

    dispatch({
      type: FETCH_CHANNELS,
      payload: Object.values(channels),
    });
  });
};

export default onChannelChange;
