import React from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

import trySignOut from '@actions/trySignOut';

function UserPanel({ trySignOut, user }) {
  const dropdownOptions = [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>{user.displayName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: 'avatar',
      text: <div>Change Avatar</div>,
    },
    {
      key: 'signout',
      text: <div onClick={trySignOut}>Sign Out</div>,
    },
  ];

  return (
    <Grid style={{ background: '#4c3c4c' }}>
      <Grid.Column>
        <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>DevChat</Header.Content>
          </Header>
        </Grid.Row>
        <Header style={{ padding: '0.25em' }} as="h4" inverted>
          <Dropdown
            trigger={<span>{user.displayName}</span>}
            options={dropdownOptions}
          />
        </Header>
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { trySignOut })(UserPanel);
