import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';
import selectChannel from '@actions/selectChannel';
import setMessagesPath from '../../../redux/actions/setMessagesPath';
import setUploadPath from '../../../redux/actions/setUploadPath';

const PrivateChannel = ({
  user,
  authUser,
  selectChannel,
  selectedPrivateChannelId,
  setMessagesPath,
  setUploadPath,
}) => {
  if (authUser.uid == user.uid) {
    return null;
  }

  let channelId = authUser.uid + user.uid;

  if (authUser.uid > user.uid) {
    channelId = user.uid + authUser.uid;
  }

  const onPrivateChannelNameClick = () => {
    setMessagesPath('messages/private/' + channelId + '/');
    setUploadPath('chat/private/' + channelId + '/');

    selectChannel({
      id: channelId,
      name: user.displayName,
      isPrivate: true,
    });
  };

  return (
    <Menu.Item
      onClick={onPrivateChannelNameClick}
      style={{ opacity: 0.7, fontStyle: 'italic' }}
      active={selectedPrivateChannelId == channelId}
    >
      <Icon name="circle" color={user.isConnected ? 'green' : 'red'} /> @{' '}
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
  setMessagesPath,
  setUploadPath,
})(PrivateChannel);
