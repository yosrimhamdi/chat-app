import React, { useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import onChildAdded from '../../../firebase/database/onChildAdded';
import removeListener from '../../../firebase/database/removeListener';
import fetchUsers from '@actions/fetchUsers';
import PrivateChannel from './PrivateChannel';
import fetchUser from '../../../redux/actions/fetchUser';
import readData from '../../../firebase/database/readData';
import onChildChanged from '../../../firebase/database/onChildChanged';
import updateUser from '../../../redux/actions/updateUser';

const PrivateChannels = ({ fetchUser, fetchUsers, users, updateUser }) => {
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

  const renderedPrivateChannels = users.map(user => (
    <PrivateChannel key={user.uid} user={user} />
  ));

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="mail" /> PRIVATE CHANNELS
        </span>{' '}
        ({users.length - 1})
      </Menu.Item>
      {renderedPrivateChannels}
    </Menu.Menu>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, { fetchUsers, fetchUser, updateUser })(
  PrivateChannels,
);
