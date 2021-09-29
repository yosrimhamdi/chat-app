import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Channel from './Channel';
import filterChannels from './filterChannels';

const StarredPublicChannels = ({ starredChannels }) => {
  const renderedStarredChannels = starredChannels.map(channel => (
    <Channel key={channel.id} channel={channel} />
  ));

  return (
    <Menu.Menu>
      <Menu.Item>
        <span>
          <Icon name="star" /> STARRED
        </span>{' '}
        ({starredChannels.length})
      </Menu.Item>
      {renderedStarredChannels}
    </Menu.Menu>
  );
};

const mapStateToProps = ({ auth, users, channels }) => ({
  starredChannels: filterChannels(auth, users, channels.all, 'starred'),
});

export default connect(mapStateToProps)(StarredPublicChannels);
