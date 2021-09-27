import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

const User = ({ user, authUser }) => {
  if (authUser.uid == user.uid) {
    return null;
  }

  return (
    <Menu.Item
      onClick={() => console.log(user)}
      style={{ opacity: 0.7, fontStyle: 'italic' }}
    >
      <Icon name="circle" color={user.isConnected ? 'green' : 'red'} /> @{' '}
      {user.displayName}
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  authUser: state.auth.user,
});

export default connect(mapStateToProps)(User);
