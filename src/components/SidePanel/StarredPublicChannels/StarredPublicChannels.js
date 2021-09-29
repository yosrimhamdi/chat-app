import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const StarredPublicChannels = () => {
  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="star" /> STARRED
        </span>{' '}
        ({[].length})
      </Menu.Item>
    </Menu.Menu>
  );
};

export default StarredPublicChannels;
