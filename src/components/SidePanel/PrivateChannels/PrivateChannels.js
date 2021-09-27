import React, { useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import onCollectionChange from '../../../firebase/database/onCollectionChange';
import removeCollectionListener from '../../../firebase/database/removeCollectionListener';
import fetchUsers from '@actions/fetchUsers';
import PrivateChannel from './PrivateChannel';

const PrivateChannels = ({ fetchUsers, users }) => {
  useEffect(() => {
    const handleCollectionChange = snapshot => {
      const users = Object.values(snapshot.val() || []);

      fetchUsers(users);
    };

    onCollectionChange('users/', handleCollectionChange);

    return () => removeCollectionListener('/users');
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

export default connect(mapStateToProps, { fetchUsers })(PrivateChannels);
