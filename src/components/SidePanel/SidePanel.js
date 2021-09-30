import React from 'react';
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

function SidePanel({
  fetchChannels,
  fetchChannel,
  fetchUser,
  fetchUsers,
  updateUser,
}) {
  useWatchUsers(fetchUser, fetchUsers, updateUser);
  useWatchChannels(fetchChannel, fetchChannels);

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

export default connect(null, {
  fetchChannels,
  fetchChannel,
  fetchUsers,
  fetchUser,
  updateUser,
})(SidePanel);
