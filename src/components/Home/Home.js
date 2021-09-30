import React from 'react';
import { Grid } from 'semantic-ui-react';

import './Home.scss';
import ColorPanel from '../ColorPanel/ColorPanel';
import SidePanel from '../SidePanel/SidePanel';
import Messages from '../Messages/Messages';
import MetaPanel from '../MetaPanel/MetaPanel';

const Home = () => {
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
};

export default Home;
