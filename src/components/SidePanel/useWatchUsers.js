import { useEffect } from 'react';

import onChildChanged from '../../firebase/database/onChildChanged';
import removeListener from '../../firebase/database/removeListener';
import onChildAdded from '../../firebase/database/onChildAdded';
import readData from '../../firebase/database/readData';

const useWatchChannels = (fetchUser, fetchUsers, updateUser) => {
  useEffect(() => {
    const handleOnChildAdded = snap => fetchUser(snap.val());
    const handleOnChildUpdated = snap => updateUser(snap.val());

    onChildAdded('users/', fetchUser, handleOnChildAdded);
    onChildChanged(handleOnChildUpdated);

    return () => {
      removeListener('users/', handleOnChildAdded);
      removeListener('users/', handleOnChildUpdated);
    };
  }, []);

  useEffect(() => {
    readData('users/', fetchUsers);
  }, []);
};

export default useWatchChannels;
