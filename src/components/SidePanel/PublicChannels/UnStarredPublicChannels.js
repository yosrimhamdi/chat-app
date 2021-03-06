import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react';

import './Channel.scss';
import CreateChannelModal from '../../Modals/CreateChannelModal';
import Channel from './Channel';
import useModal from '../../Modals/Modal/useModal';
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
      <CreateChannelModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </Menu.Menu>
  );
}

const mapStateToProps = ({ auth, users, channels }) => ({
  unStarredChannels: filterChannels(auth, users, channels.all, 'UnStarred'),
});

export default connect(mapStateToProps)(UnStarredPublicChannels);
