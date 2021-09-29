import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

import addStarredChannel from '../../../firebase/database/addStarredChannel';

const ChannelName = ({ selectedChannel }) => {
  const { name, isPrivate, id } = selectedChannel;

  const onStarIconClick = () => {
    addStarredChannel(id);
  };

  if (isPrivate) {
    return <span>@ {name}</span>;
  }

  return (
    <span>
      # {name}{' '}
      <Icon
        style={{ cursor: 'pointer' }}
        name={'star outline'}
        color="black"
        onClick={onStarIconClick}
      />
    </span>
  );
};

const mapStateToProps = state => ({
  selectedChannel: state.channels.selectedChannel,
});

export default connect(mapStateToProps)(ChannelName);
