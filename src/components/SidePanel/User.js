import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';
import selectChannel from '@actions/selectChannel';

const User = ({ user, authUser, selectChannel, selectedPrivateChannelId }) => {
  if (authUser.uid == user.uid) {
    return null;
  }

  const onUserClick = () => {
    let channelId = authUser.uid + '/' + user.uid;

    if (authUser.uid > user.uid) {
      channelId = user.uid + '/' + authUser.uid;
    }

    selectChannel({
      id: channelId,
      name: user.displayName,
      isPrivate: true,
    });
  };

  return (
    <Menu.Item
      onClick={onUserClick}
      style={{ opacity: 0.7, fontStyle: 'italic' }}
      active={selectedPrivateChannelId.includes(user.uid)}
    >
      <Icon name="circle" color={user.isConnected ? 'green' : 'red'} /> @{' '}
      {user.displayName}
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  authUser: state.auth.user,
  selectedPrivateChannelId: state.channels.selectedChannel.id || '',
});

export default connect(mapStateToProps, { selectChannel })(User);
