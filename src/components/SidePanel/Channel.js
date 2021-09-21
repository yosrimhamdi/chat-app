import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import selectChannel from '../../redux/actions/selectChannel';

const Channel = ({ channel, selectChannel }) => (
  <Menu.Item
    key={channel.id}
    name={channel.name}
    style={{ opacity: 0.6 }}
    onClick={() => selectChannel(channel)}
  >
    # {channel.name}
  </Menu.Item>
);

export default connect(null, { selectChannel })(Channel);
