import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';

import onChildAdded from '../../../firebase/database/onChildAdded';
import removeListener from '../../../firebase/database/removeListener';
import setNotification from '../../../redux/actions/setNotification';

const Notification = ({
  channel,
  selectedChannelId,
  setNotification,
  notifications,
}) => {
  useEffect(() => {
    const handleOnChildAdded = snap => setNotification(snap.val());

    onChildAdded('messages/public/' + channel.id, handleOnChildAdded);

    return removeListener('messages/public/' + channel.id, handleOnChildAdded);
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
