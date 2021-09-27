import React, { useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import onCollectionChange from '../../firebase/database/onCollectionChange';
import removeCollectionListener from '../../firebase/database/removeCollectionListener';
import fetchUsers from '@actions/fetchUsers';

const DirectMessages = ({ fetchUsers }) => {
  useEffect(() => {
    const handleCollectionChange = snapshot => {
      const users = Object.values(snapshot.val() || []);

      fetchUsers(users);
    };

    onCollectionChange('users/', handleCollectionChange);

    return () => removeCollectionListener('/users');
  }, []);

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="mail" /> DIRECT MESSAGES
        </span>{' '}
        ({[].length})
      </Menu.Item>
      {/* Users to Send Direct Messages */}
    </Menu.Menu>
  );
};

export default connect(null, { fetchUsers })(DirectMessages);
