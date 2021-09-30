import { useEffect } from 'react';

import removeListener from '../../firebase/database/removeListener';
import onChildAdded from '../../firebase/database/onChildAdded';
import readData from '../../firebase/database/readData';

const useWatchUsers = (fetchChannel, fetchChannels) => {
  useEffect(() => {
    const handleOnChildAdded = snap => fetchChannel(snap.val());

    onChildAdded('channels/', handleOnChildAdded);

    return () => removeListener('channels/', 'child_added');
  }, [onChildAdded]);

  useEffect(() => {
    readData('channels/', fetchChannels);
  }, []);
};

export default useWatchUsers;
