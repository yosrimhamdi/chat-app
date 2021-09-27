import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import './Channels.scss';
import CreateChannelModal from '../Modals/CreateChannelModal/CreateChannelModal';
import Channel from './Channel';
import removeListener from '../../firebase/database/removeListener';
import onCollectionChange from '../../firebase/database/onCollectionChange';
import fetchChannels from '@actions/fetchChannels';
import ModalContext from '../Modals/ModalContext';
import useModal from '../Modals/useModal';

function Channels({ channels, fetchChannels }) {
  const [isModalOpen, openModal, closeModal] = useModal();

  useEffect(() => {
    const handleCollectionChange = snapshot => {
      const channels = Object.values(snapshot.val() || []);

      fetchChannels(channels);
    };

    onCollectionChange('channels/', handleCollectionChange);

    return () => removeListener('channels/');
  }, [onCollectionChange]);

  const renderedChannels = channels.all.map(channel => (
    <Channel key={channel.id} channel={channel} />
  ));

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> CHANNELS
        </span>{' '}
        ({channels.all.length})
        <Icon style={{ cursor: 'pointer' }} name="add" onClick={openModal} />
      </Menu.Item>
      {renderedChannels}
      <ModalContext.Provider value={{ isModalOpen, closeModal }}>
        <CreateChannelModal />
      </ModalContext.Provider>
    </Menu.Menu>
  );
}

const mapStateToProps = state => ({
  channels: state.channels,
});

export default connect(mapStateToProps, { fetchChannels })(Channels);
