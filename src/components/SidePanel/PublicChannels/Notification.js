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
  uid,
  path,
}) => {
  const { id } = channel;

  useEffect(() => {
    const handleOnChildAdded = snap => {
      const message = snap.val();

      if (message.user.uid !== uid && selectedChannelId !== id) {
        setNotification(message.channelId);
      }
    };

    if (path) {
      onChildAdded(path + id, handleOnChildAdded);

      return () => removeListener(path + id, 'child_added');
    }
  });

  if (id === selectedChannelId || !notifications[id]) {
    return null;
  }

  return <Label color="red">{notifications[id]}</Label>;
};

const mapStateToProps = ({ channels, auth, messages }) => ({
  selectedChannelId: channels.selectedChannel.id,
  notifications: channels.notifications,
  uid: auth.user.uid,
  path: messages.path,
});

export default connect(mapStateToProps, { setNotification })(Notification);
