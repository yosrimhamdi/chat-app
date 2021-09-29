import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import './Channel.scss';
import CreateChannelModal from '../../Modals/CreateChannelModal/CreateChannelModal';
import Channel from './Channel';
import removeListener from '../../../firebase/database/removeListener';
import onChildAdded from '../../../firebase/database/onChildAdded';
import fetchChannels from '@actions/fetchChannels';
import ModalContext from '../../Modals/ModalContext';
import useModal from '../../Modals/useModal';
import readData from '../../../firebase/database/readData';
import fetchChannel from '@actions/fetchChannel';
import filterChannels from './filterChannels';

function UnStarredPublicChannels({
  unStarredChannels,
  fetchChannels,
  fetchChannel,
}) {
  const [isModalOpen, openModal, closeModal] = useModal();

  useEffect(() => {
    const handleOnChildAdded = snap => fetchChannel(snap.val());

    onChildAdded('channels/', handleOnChildAdded);

    return () => removeListener('channels/', handleOnChildAdded);
  }, [onChildAdded]);

  useEffect(() => {
    readData('channels/', fetchChannels);
  }, []);

  const renderedPublicChannels = unStarredChannels.map(channel => (
    <Channel key={channel.id} channel={channel} />
  ));

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> CHANNELS
        </span>{' '}
        ({unStarredChannels.length})
        <Icon style={{ cursor: 'pointer' }} name="add" onClick={openModal} />
      </Menu.Item>
      {renderedPublicChannels}
      <ModalContext.Provider value={{ isModalOpen, closeModal }}>
        <CreateChannelModal />
      </ModalContext.Provider>
    </Menu.Menu>
  );
}

const mapStateToProps = ({ auth, users, channels }) => ({
  unStarredChannels: filterChannels(auth, users, channels.all),
});

export default connect(mapStateToProps, { fetchChannels, fetchChannel })(
  UnStarredPublicChannels,
);
