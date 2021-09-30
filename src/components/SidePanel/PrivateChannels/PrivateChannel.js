import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';
import selectChannel from '@actions/selectChannel';
import Notification from '../Notification';

const PrivateChannel = ({
  user,
  authUser,
  selectChannel,
  selectedPrivateChannelId,
}) => {
  if (authUser.uid == user.uid) {
    return null;
  }

  let channelId = authUser.uid + user.uid;

  if (authUser.uid > user.uid) {
    channelId = user.uid + authUser.uid;
  }

  const channel = {
    id: channelId,
    name: user.displayName,
    isPrivate: true,
  };

  return (
    <Menu.Item
      onClick={() => selectChannel(channel)}
      style={{ opacity: 0.7, fontStyle: 'italic' }}
      active={selectedPrivateChannelId == channelId}
    >
      <Icon name="circle" color={user.isConnected ? 'green' : 'red'} /> @{' '}
      <Notification channel={channel} path="messages/private/" />
      {user.displayName}
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  authUser: state.auth.user,
  selectedPrivateChannelId: state.channels.selectedChannel.id,
});

export default connect(mapStateToProps, {
  selectChannel,
})(PrivateChannel);
