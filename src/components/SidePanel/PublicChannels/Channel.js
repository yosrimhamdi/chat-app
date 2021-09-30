import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import selectChannel from '../../../redux/actions/selectChannel';
import Notification from '../Notification';
import clearNotifications from '../../../redux/actions/clearNotifications';

const PublicChannel = ({
  channel,
  selectChannel,
  selectedChannelId,
  clearNotifications,
  path,
}) => {
  const { id, name } = channel;

  const onPublicChannelClick = () => {
    selectChannel(channel);
    clearNotifications(id);
  };

  return (
    <Menu.Item
      style={{ opacity: 0.6 }}
      onClick={onPublicChannelClick}
      active={id == selectedChannelId}
    >
      <Notification channel={channel} path={path} /># {name}
    </Menu.Item>
  );
};

const mapStateToProps = ({ channels, messages }) => ({
  selectedChannelId: channels.selectedChannel.id,
  path: messages.path,
});

export default connect(mapStateToProps, {
  selectChannel,
  clearNotifications,
})(PublicChannel);
