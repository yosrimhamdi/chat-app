import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import Modal from '../Modal/Modal';

function Channels() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
export default Channels;
