import React from 'react';
import { Menu } from 'semantic-ui-react';

const StarredPublicChannel = ({ channel }) => {
  return (
    <Menu.Item style={{ opacity: 0.6 }} active={false}>
      # {channel.name}
    </Menu.Item>
  );
};

export default StarredPublicChannel;
