import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import selectChannel from '../../../redux/actions/selectChannel';
import Notification from './Notification';
import clearNotifications from '../../../redux/actions/clearNotifications';
import setMessagesPath from '../../../redux/actions/setMessagesPath';
import setUploadPath from '../../../redux/actions/setUploadPath';

const PublicChannel = ({
  channel,
  selectChannel,
  selectedChannelId,
  clearNotifications,
  setMessagesPath,
  setUploadPath,
}) => {
  const { id, name } = channel;

  const onPublicChannelClick = () => {
    selectChannel(channel);
    clearNotifications(id);
    setMessagesPath('messages/public/' + id + '/');
    setUploadPath('chat/public/' + id + '/');
  };

  return (
    <Menu.Item
      key={id}
      name={name}
      style={{ opacity: 0.6 }}
      onClick={onPublicChannelClick}
      active={id == selectedChannelId}
    >
      <Notification channel={channel} /># {name}
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  selectedChannelId: state.channels.selectedChannel.id,
});

export default connect(mapStateToProps, {
  selectChannel,
  clearNotifications,
  setMessagesPath,
  setUploadPath,
})(PublicChannel);
