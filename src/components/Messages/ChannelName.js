import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

const ChannelName = ({ selectedChannel }) => {
  const { name, isPrivate } = selectedChannel;

  if (isPrivate) {
    return <span>@ {name}</span>;
  }

  return (
    <span>
      # {name} <Icon name={'star outline'} color="black" />
    </span>
  );
};

const mapStateToProps = state => ({
  selectedChannel: state.channels.selectedChannel,
});

export default connect(mapStateToProps)(ChannelName);
