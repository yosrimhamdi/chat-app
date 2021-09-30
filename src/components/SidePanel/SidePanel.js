import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';

import PrivateChannels from './PrivateChannels/PrivateChannels';
import UnStarredPublicChannels from './PublicChannels/UnStarredPublicChannels';
import StarredPublicChannels from './PublicChannels/StarredPublicChannels';
import fetchChannels from '@actions/fetchChannels';
import fetchChannel from '@actions/fetchChannel';
import fetchUsers from '@actions/fetchUsers';
import updateUser from '@actions/updateUser';
import fetchUser from '@actions/fetchUser';
import useWatchChannels from './useWatchChannels';
import useWatchUsers from './useWatchUsers';
import setMessagesPath from '../../redux/actions/setMessagesPath';
import setUploadPath from '../../redux/actions/setUploadPath';

function SidePanel({
  fetchChannels,
  fetchChannel,
  fetchUser,
  fetchUsers,
  updateUser,
  selectedChannel,
  setMessagesPath,
  setUploadPath,
}) {
  useWatchUsers(fetchUser, fetchUsers, updateUser);
  useWatchChannels(fetchChannel, fetchChannels);

  const { id } = selectedChannel;

  useEffect(() => {
    if (id) {
      setMessagesPath('messages/public/' + id);
      setUploadPath('chat/public/' + id);
    }
  }, [id]);

  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ background: '#4c3c4c', fontSize: '1.2rem' }}
    >
      <UserPanel />
      <StarredPublicChannels />
      <UnStarredPublicChannels />
      <PrivateChannels />
    </Menu>
  );
}

const mapStateToProps = ({ channels }) => ({
  selectedChannel: channels.selectedChannel,
});

export default connect(mapStateToProps, {
  fetchChannels,
  fetchChannel,
  fetchUsers,
  fetchUser,
  updateUser,
  setMessagesPath,
  setUploadPath,
})(SidePanel);
