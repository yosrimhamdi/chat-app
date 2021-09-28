import React, { useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import onChildAdded from '../../../firebase/database/onChildAdded';
import removeCollectionListener from '../../../firebase/database/removeCollectionListener';
import fetchUser from '@actions/fetchUser';
import PrivateChannel from './PrivateChannel';

const PrivateChannels = ({ fetchUser, users }) => {
  useEffect(() => {
    const handleCollectionChange = snapshot => {
      fetchUser(snapshot.val());
    };

    onChildAdded('users/', handleCollectionChange);

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

export default connect(mapStateToProps, { fetchUser })(PrivateChannels);
