import React from 'react';
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

import trySignOut from '../../firebase/auth/trySignOut';
import signOut from '@actions/signOut';

function UserPanel({ signOut, user, theme }) {
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
      text: <div onClick={() => trySignOut(signOut)}>Sign Out</div>,
    },
  ];

  return (
    <Grid style={{ background: theme.primaryColor }}>
      <Grid.Column>
        <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>DevChat</Header.Content>
          </Header>
          <Header style={{ padding: '0.25em' }} as="h4" inverted>
            <Dropdown
              trigger={
                <span>
                  <Image src={user.photoURL} spaced="right" avatar />
                  <span>{user.displayName}</span>
                </span>
              }
              options={dropdownOptions}
            />
          </Header>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = ({ theme, auth }) => {
  return {
    user: auth.user,
    theme: theme.userTheme ?? theme.defaultTheme,
  };
};

export default connect(mapStateToProps, { signOut })(UserPanel);
