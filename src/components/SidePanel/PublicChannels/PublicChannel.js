import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import selectChannel from '../../../redux/actions/selectChannel';
import Notification from './Notification';
import clearNotification from '../../../redux/actions/clearNotification';
import clearMessages from '../../../redux/actions/clearMessages';

const PublicChannel = ({
  channel,
  selectChannel,
  selectedChannelId,
  clearNotification,
  clearMessages,
}) => {
  const { id, name } = channel;

  const onPublicChannelClick = () => {
    clearNotification(channel.id);
    clearMessages();
    selectChannel(channel);
  };

  return (
    <Menu.Item
      key={id}
      name={name}
      style={{ opacity: 0.6 }}
      onClick={onPublicChannelClick}
      active={id == selectedChannelId}
    >
      <Notification currentChannelId={channel.id} /># {name}
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  selectedChannelId: state.channels.selectedChannel.id,
});

export default connect(mapStateToProps, {
  selectChannel,
  clearNotification,
  clearMessages,
})(PublicChannel);
