import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import './PublicChannel.scss';
import CreateChannelModal from '../../Modals/CreateChannelModal/CreateChannelModal';
import PublicChannel from './PublicChannel';
import removeCollectionListener from '../../../firebase/database/removeCollectionListener';
import onCollectionChange from '../../../firebase/database/onCollectionChange';
import fetchChannels from '@actions/fetchChannels';
import ModalContext from '../../Modals/ModalContext';
import useModal from '../../Modals/useModal';

function PublicChannels({ channels, fetchChannels }) {
  const [isModalOpen, openModal, closeModal] = useModal();

  useEffect(() => {
    const handleCollectionChange = snapshot => {
      const channels = Object.values(snapshot.val() || []);

      fetchChannels(channels);
    };

    onCollectionChange('channels/', handleCollectionChange);

    return () => removeCollectionListener('channels/');
  }, [onCollectionChange]);

  const renderedPublicChannels = channels.all.map(channel => (
    <PublicChannel key={channel.id} channel={channel} />
  ));

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> PUB CHANNELS
        </span>{' '}
        ({channels.all.length})
        <Icon style={{ cursor: 'pointer' }} name="add" onClick={openModal} />
      </Menu.Item>
      {renderedPublicChannels}
      <ModalContext.Provider value={{ isModalOpen, closeModal }}>
        <CreateChannelModal />
      </ModalContext.Provider>
    </Menu.Menu>
  );
}

const mapStateToProps = state => ({
  channels: state.channels,
});

export default connect(mapStateToProps, { fetchChannels })(PublicChannels);