import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import Modal from '../Modal/Modal';
import onChannelChange from '@actions/onChannelChange';

function Channels({ onChannelChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    onChannelChange();
  }, [onChannelChange]);

  return (
    <Menu.Menu style={{ paddingBottom: '2em' }}>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> CHANNELS
        </span>{' '}
        (0) <Icon name="add" onClick={() => setIsModalOpen(true)} />
      </Menu.Item>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* Channels */}
    </Menu.Menu>
  );
}
export default connect(null, { onChannelChange })(Channels);
