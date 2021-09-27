import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import selectChannel from '../../redux/actions/selectChannel';

const PublicChannel = ({ channel, selectChannel, selectedChannelId }) => {
  const { id, name } = channel;

  return (
    <Menu.Item
      key={id}
      name={name}
      style={{ opacity: 0.6 }}
      onClick={() => selectChannel(channel)}
      active={id == selectedChannelId}
    >
      # {name}
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  selectedChannelId: state.channels.selectedChannel.id,
});

export default connect(mapStateToProps, { selectChannel })(PublicChannel);
