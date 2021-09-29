import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';

import onChildAdded from '../../../firebase/database/onChildAdded';
import setNotification from '../../../redux/actions/setNotification';

const Notification = ({
  channel,
  selectedChannelId,
  setNotification,
  notifications,
}) => {
  useEffect(() => {
    onChildAdded('messages/public/' + channel.id, () => {
      setNotification(channel.id);
    });
  }, []);

  if (channel.id === selectedChannelId || !notifications[channel.id]) {
    return null;
  }

  return <Label color="red">{notifications[channel.id]}</Label>;
};

const mapStateToProps = state => ({
  selectedChannelId: state.channels.selectedChannel.id,
  notifications: state.channels.notifications,
});

export default connect(mapStateToProps, { setNotification })(Notification);
