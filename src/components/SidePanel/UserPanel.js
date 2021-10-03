import React, { useState } from 'react';
import {
  Button,
  Input,
  Grid,
  Header,
  Icon,
  Dropdown,
  Image,
  Modal,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import trySignOut from '../../firebase/auth/trySignOut';
import signOut from '@actions/signOut';

const UserPanel = ({ signOut, user, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      text: <div onClick={() => setIsModalOpen(true)}>Change Avatar</div>,
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
      <Modal basic open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Change Avatar</Modal.Header>
        <Modal.Content>
          <Input fluid type="file" label="New Avatar" name="newPhoto" />
          <Grid centered stackable columns={2}>
            <Grid.Row centered>
              <Grid.Column className="ui center aligned grid">
                {/* Image Preivew */}
              </Grid.Column>
              <Grid.Column>Copped Image Preview</Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted>
            <Icon name="save" /> Change Avatar
          </Button>
          <Button color="green" inverted>
            <Icon name="image" /> Preview
          </Button>
          <Button color="red" inverted onClick={() => setIsModalOpen(false)}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </Grid>
  );
};

const mapStateToProps = ({ theme, auth }) => {
  return {
    user: auth.user,
    theme: theme.userTheme ?? theme.defaultTheme,
  };
};

export default connect(mapStateToProps, { signOut })(UserPanel);
