import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import './Home.scss';
import ColorPanel from '../ColorPanel/ColorPanel';
import SidePanel from '../SidePanel/SidePanel';
import Messages from '../Messages/Messages';
import MetaPanel from '../MetaPanel/MetaPanel';
import setMessagesPath from '../../redux/actions/setMessagesPath';
import setUploadPath from '../../redux/actions/setUploadPath';

function Home({ setMessagesPath, setUploadPath, selectedChannel }) {
  useEffect(() => {
    if (selectedChannel) {
      setMessagesPath('messages/public/' + selectedChannel.id);
      setUploadPath('chat/public/' + selectedChannel.id);
    }
  }, [selectedChannel]);

  return (
    <Grid columns="equal" className="home">
      <ColorPanel />
      <SidePanel />
      <Grid.Column className="home__message">
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = ({ channels }) => ({
  selectedChannel: channels.selectedChannel,
});

export default connect(mapStateToProps, { setMessagesPath, setUploadPath })(
  Home,
);
