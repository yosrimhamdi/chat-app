import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react';

import onChildAdded from '../../firebase/database/listeners/onChildAdded';
import removeListener from '../../firebase/database/listeners/removeListener';
import setNotification from '../../redux/actions/setNotification';
import SOUND_URL from './soundURL';

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
        new Audio(SOUND_URL).play();
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

const mapStateToProps = ({ channels, auth }) => ({
  selectedChannelId: channels.selectedChannel.id,
  notifications: channels.notifications,
  uid: auth.user.uid,
});

export default connect(mapStateToProps, { setNotification })(Notification);
