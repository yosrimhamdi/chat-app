import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

function Channels() {
  return (
    <Menu.Menu style={{ paddingBottom: '2em' }}>
      <Menu.Item>
        <span>
          <Icon name="exchange" /> CHANNELS
        </span>{' '}
        (0) <Icon name="add" />
      </Menu.Item>
      {/* Channels */}
    </Menu.Menu>
  );
}
export default Channels;
