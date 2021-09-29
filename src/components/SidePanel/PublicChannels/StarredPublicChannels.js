import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Channel from './Channel';

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

const mapStateToProps = ({ auth, users, channels }) => {
  const uid = auth.user.uid;
  const user = users.find(user => user.uid === uid);

  const starredChannelsIds = Object.keys(user?.starredChannels || {});

  const starredChannels = channels.all.filter(channel =>
    starredChannelsIds.includes(channel.id),
  );

  return { starredChannels };
};

export default connect(mapStateToProps)(StarredPublicChannels);
