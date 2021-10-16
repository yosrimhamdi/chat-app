import { useEffect } from 'react';

import onChildChanged from '../../firebase/database/listeners/onChildChanged';
import removeListener from '../../firebase/database/listeners/removeListener';
import onChildAdded from '../../firebase/database/listeners/onChildAdded';
import readData from '../../firebase/database/readData';

const useWatchUsers = (fetchUser, fetchUsers, updateUser) => {
  useEffect(() => {
    onChildAdded('users/', fetchUser);
    onChildChanged(updateUser);

    return () => removeListener('users/');
  }, []);

  useEffect(async () => {
    const data = await readData('users/');
    fetchUsers(data);
  }, []);
};

export default useWatchUsers;
