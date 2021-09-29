import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import PrivateChannel from './PrivateChannel';

const PrivateChannels = ({ users }) => {
  const renderedPrivateChannels = users.map(user => (
    <PrivateChannel key={user.uid} user={user} />
  ));

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="mail" /> DIRECT MESSAGES
        </span>{' '}
        ({users.length - 1 < 0 ? 0 : users.length - 1})
      </Menu.Item>
      {renderedPrivateChannels}
    </Menu.Menu>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(PrivateChannels);
