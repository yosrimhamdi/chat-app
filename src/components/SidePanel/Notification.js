import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';

import onChildAdded from '../../firebase/database/onChildAdded';
import removeListener from '../../firebase/database/removeListener';
import setNotification from '../../redux/actions/setNotification';

const Notification = ({
  channel,
  selectedChannelId,
  setNotification,
  notifications,
  uid,
}) => {
  useEffect(() => {
    const handleOnChildAdded = snap => {
      const message = snap.val();

      if (message.user.uid !== uid && selectedChannelId !== channel.id) {
        setNotification(message);
      }
    };

    onChildAdded('messages/public/' + channel.id, handleOnChildAdded);

    return removeListener('messages/public/' + channel.id, 'child_added');
  }, [selectedChannelId]);

  if (channel.id === selectedChannelId || !notifications[channel.id]) {
    return null;
  }

  return <Label color="red">{notifications[channel.id]}</Label>;
};

const mapStateToProps = state => ({
  selectedChannelId: state.channels.selectedChannel.id,
  notifications: state.channels.notifications,
  uid: state.auth.user.uid,
});

export default connect(mapStateToProps, { setNotification })(Notification);
