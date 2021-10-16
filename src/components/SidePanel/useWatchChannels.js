import { useEffect } from 'react';

import removeListener from '../../firebase/database/listeners/removeListener';
import onChildAdded from '../../firebase/database/listeners/onChildAdded';
import readData from '../../firebase/database/readData';

const useWatchChannels = (fetchChannel, fetchChannels) => {
  useEffect(() => {
    onChildAdded('channels/', fetchChannel);

    return () => removeListener('channels/', 'child_added');
  }, []);

  useEffect(async () => {
    const data = await readData('channels/');
    fetchChannels(data);
  }, []);
};

export default useWatchChannels;
