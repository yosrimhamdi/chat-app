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
import onNewChannelMessage from '../../../firebase/database/onNewChannelMessage';
import setNewNotification from '@actions/setNewNotification';

function PublicChannels({ channels, fetchChannels, setNewNotification }) {
  const [isModalOpen, openModal, closeModal] = useModal();

  useEffect(() => {
    const handleCollectionChange = snapshot => {
      const channels = Object.values(snapshot.val() || []);

      fetchChannels(channels);
    };

    onCollectionChange('channels/', handleCollectionChange);

    return () => removeCollectionListener('channels/');
  }, [onCollectionChange]);

  useEffect(() => {
    channels.forEach(channel => {
      // put this on collection change: up
      onNewChannelMessage(channel.id, setNewNotification);
    });

    return () => null; // clear here.
  }, [channels]);

  const renderedPublicChannels = channels.map(channel => (
    <PublicChannel key={channel.id} channel={channel} />
  ));

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> PUB CHANNELS
        </span>{' '}
        ({channels.length})
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
  channels: state.channels.all,
});

export default connect(mapStateToProps, { fetchChannels, setNewNotification })(
  PublicChannels,
);
