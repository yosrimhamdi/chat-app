import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import Modal from '../Modal/Modal';
import Channel from './Channel';
import onChannelChange from '@actions/onChannelChange';
import removeListener from '../../firebase/database/removeListener';

function Channels({ onChannelChange, channels }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    onChannelChange();

    return () => removeListener('channels/');
  }, [onChannelChange]);

  const renderedChannels = channels.all.map(channel => (
    <Channel key={channel.id} channel={channel} />
  ));

  return (
    <Menu.Menu style={{ paddingBottom: '2em' }}>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> CHANNELS
        </span>{' '}
        ({channels.all.length})
        <Icon
          style={{ cursor: 'pointer' }}
          name="add"
          onClick={() => setIsModalOpen(true)}
        />
      </Menu.Item>
      {renderedChannels}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Menu.Menu>
  );
}

const mapStateToProps = state => ({
  channels: state.channels,
});

export default connect(mapStateToProps, { onChannelChange })(Channels);
