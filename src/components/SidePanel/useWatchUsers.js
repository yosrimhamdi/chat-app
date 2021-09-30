import { useEffect } from 'react';

import onChildChanged from '../../firebase/database/onChildChanged';
import removeListener from '../../firebase/database/removeListener';
import onChildAdded from '../../firebase/database/onChildAdded';
import readData from '../../firebase/database/readData';

const useWatchUsers = (fetchUser, fetchUsers, updateUser) => {
  useEffect(() => {
    onChildAdded('users/', fetchUser);
    onChildChanged(updateUser);

    return () => {
      removeListener('users/', 'child_added');
      removeListener('users/', 'child_changed');
    };
  }, []);

  useEffect(() => {
    readData('users/', fetchUsers);
  }, []);
};

export default useWatchUsers;
