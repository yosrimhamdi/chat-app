import { useEffect } from 'react';

import removeListener from '../../firebase/database/removeListener';
import onChildAdded from '../../firebase/database/onChildAdded';
import readData from '../../firebase/database/readData';

const useWatchChannels = (fetchChannel, fetchChannels) => {
  useEffect(() => {
    onChildAdded('channels/', fetchChannel);

    return () => removeListener('channels/', 'child_added');
  }, []);

  useEffect(() => {
    readData('channels/', fetchChannels);
  }, []);
};

export default useWatchChannels;
