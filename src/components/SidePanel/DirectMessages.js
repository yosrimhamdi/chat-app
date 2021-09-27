import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const DirectMessages = () => {
  return (
    <Menu.Menu className="menu">
      <Menu.Item>
        <span>
          <Icon name="mail" /> DIRECT MESSAGES
        </span>{' '}
        ({[].length})
      </Menu.Item>
      {/* Users to Send Direct Messages */}
    </Menu.Menu>
  );
};

export default DirectMessages;
