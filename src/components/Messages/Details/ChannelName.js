import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

import starChannel from '../../../firebase/database/starChannel';
import unStartChannel from '../../../firebase/database/unStartChannel';

const ChannelName = ({ selectedChannel, starredChannels }) => {
  const { name, isPrivate, id } = selectedChannel;

  const isStarred = starredChannels.includes(id);

  const onStarIconClick = () => {
    if (isStarred) {
      unStartChannel(id);
    } else {
      starChannel(id);
    }
  };

  if (isPrivate) {
    return <span>@ {name}</span>;
  }

  return (
    <span>
      # {name}{' '}
      <Icon
        style={{ cursor: 'pointer' }}
        name={isStarred ? 'star' : 'star outline'}
        color={isStarred ? 'yellow' : 'black'}
        onClick={onStarIconClick}
      />
    </span>
  );
};

const mapStateToProps = ({ auth, users, channels }) => {
  const uid = auth.user.uid;
  const user = users.find(user => user.uid === uid);

  return {
    selectedChannel: channels.selectedChannel,
    starredChannels: Object.keys(user?.starredChannels || {}),
  };
};

export default connect(mapStateToProps)(ChannelName);
