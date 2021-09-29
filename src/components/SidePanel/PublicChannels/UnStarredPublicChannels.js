import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import './Channel.scss';
import CreateChannelModal from '../../Modals/CreateChannelModal/CreateChannelModal';
import Channel from './Channel';
import ModalContext from '../../Modals/ModalContext';
import useModal from '../../Modals/useModal';
import filterChannels from './filterChannels';

function UnStarredPublicChannels({ unStarredChannels }) {
  const [isModalOpen, openModal, closeModal] = useModal();

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
  unStarredChannels: filterChannels(auth, users, channels.all, 'UnStarred'),
});

export default connect(mapStateToProps)(UnStarredPublicChannels);
