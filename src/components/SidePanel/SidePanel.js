import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';

import PrivateChannels from './PrivateChannels/PrivateChannels';
import UnStarredPublicChannels from './PublicChannels/UnStarredPublicChannels';
import StarredPublicChannels from './PublicChannels/StarredPublicChannels';
import removeListener from '../../firebase/database/removeListener';
import onChildAdded from '../../firebase/database/onChildAdded';
import readData from '../../firebase/database/readData';
import fetchChannels from '@actions/fetchChannels';
import fetchChannel from '@actions/fetchChannel';

function SidePanel({ fetchChannels, fetchChannel }) {
  useEffect(() => {
    const handleOnChildAdded = snap => fetchChannel(snap.val());

    onChildAdded('channels/', handleOnChildAdded);

    return () => removeListener('channels/', handleOnChildAdded);
  }, [onChildAdded]);

  useEffect(() => {
    readData('channels/', fetchChannels);
  }, []);

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

export default connect(null, { fetchChannels, fetchChannel })(SidePanel);
