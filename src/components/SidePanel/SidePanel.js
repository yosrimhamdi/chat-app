import React from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';

import PrivateChannels from './PrivateChannels/PrivateChannels';
import UnStarredPublicChannels from './PublicChannels/UnStarredPublicChannels';
import StarredPublicChannels from './PublicChannels/StarredPublicChannels';

function SidePanel() {
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

export default SidePanel;
