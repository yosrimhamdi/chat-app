import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import './PublicChannel.scss';
import CreateChannelModal from '../../Modals/CreateChannelModal/CreateChannelModal';
import PublicChannel from './PublicChannel';
import removeCollectionListener from '../../../firebase/database/removeCollectionListener';
import onCollectionChildAdded from '../../../firebase/database/onCollectionChildAdded';
import fetchChannel from '@actions/fetchChannel';
import ModalContext from '../../Modals/ModalContext';
import useModal from '../../Modals/useModal';
import setNewNotification from '@actions/setNewNotification';

function PublicChannels({ channels, fetchChannel, setNewNotification }) {
  const [isModalOpen, openModal, closeModal] = useModal();

  useEffect(() => {
    const handleCollectionChange = snapshot => {
      fetchChannel(snapshot.val());
    };

    onCollectionChildAdded('channels/', handleCollectionChange);

    return () => removeCollectionListener('channels/');
  }, [onCollectionChildAdded]);

  useEffect(() => {
    channels.forEach(channel => {
      onCollectionChildAdded('messages/public/' + channel.id + '/', () =>
        setNewNotification(channel.id),
      );
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

export default connect(mapStateToProps, { fetchChannel, setNewNotification })(
  PublicChannels,
);
