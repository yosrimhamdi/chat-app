import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import Modal from '../Modal/Modal';
import Channel from './Channel';
import removeListener from '../../firebase/database/removeListener';
import onCollectionChange from '../../firebase/database/onCollectionChange';
import fetchChannels from '@actions/fetchChannels';

function Channels({ channels, fetchChannels }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    onCollectionChange('channels/', fetchChannels);

    return () => removeListener('channels/');
  }, [onCollectionChange]);

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

export default connect(mapStateToProps, { fetchChannels })(Channels);
