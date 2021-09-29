import React from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';

import PublicChannels from './PublicChannels/PublicChannels';
import PrivateChannels from './PrivateChannels/PrivateChannels';
import StarredPublicChannels from './StarredPublicChannels/StarredPublicChannels';

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
      <PublicChannels />
      <PrivateChannels />
    </Menu>
  );
}

export default SidePanel;
