import React from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';
import clearNotification from '../../../redux/actions/clearNotification';

const Notification = ({
  currentChannelId,
  clearNotification,
  notificationCount,
  selectedChannelId,
}) => {
  if (selectedChannelId === currentChannelId) {
    clearNotification(currentChannelId);
  }

  if (selectedChannelId === currentChannelId || notificationCount === 0) {
    return null;
  }

  return <Label color="red">{notificationCount}</Label>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    notificationCount: state.notifications[ownProps.currentChannelId],
    selectedChannelId: state.channels.selectedChannel.id,
  };
};

export default connect(mapStateToProps, { clearNotification })(Notification);
