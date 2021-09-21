import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import Modal from '../Modal/Modal';
import onChannelChange from '@actions/onChannelChange';

function Channels({ onChannelChange, channels }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    onChannelChange();
  }, [onChannelChange]);

  console.log(channels);

  const renderedChannels = channels.map(({ id, name }) => {
    return (
      <Menu.Item key={id} name={name} style={{ opacity: 0.6 }}>
        # {name}
      </Menu.Item>
    );
  });

  return (
    <Menu.Menu style={{ paddingBottom: '2em' }}>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> CHANNELS
        </span>{' '}
        ({channels.length})
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
