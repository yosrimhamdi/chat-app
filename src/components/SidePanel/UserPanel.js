import React, { useState, useRef } from 'react';
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
import AvatarEditor from 'react-avatar-editor';

import trySignOut from '../../firebase/auth/trySignOut';
import signOut from '@actions/signOut';
import uploadUserPhoto from '../../firebase/storage/uploadUserPhoto';
import updateAuthUserPhoto from '../../firebase/auth/updateAuthUserPhoto';
import updateDBUserPhoto from '../../firebase/database/updateDBUserPhoto';
import setPercent from '@actions/setPercent';
import setLoading from '@actions/setLoading';
import { UPLOADING_FILE } from '../../redux/actions/types';
import { toastr } from 'react-redux-toastr';

const UserPanel = ({
  signOut,
  user,
  theme,
  setPercent,
  setLoading,
  isUploading,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState();
  const [photoAsDataURL, setPhotoAsDataURL] = useState();
  const [croppedPhoto, setCroppedPhoto] = useState();
  const [croppedPhotoBlob, setCroppedPhotoBlob] = useState();
  const avatarEditor = useRef();

  const onCropButtonClick = () => {
    avatarEditor.current.getImageScaledToCanvas().toBlob(blob => {
      const croppedPhoto = URL.createObjectURL(blob);

      setCroppedPhoto(croppedPhoto);
      setCroppedPhotoBlob(blob);
    });
  };

  const onSubmit = async () => {
    setLoading(UPLOADING_FILE, true);
    const photoURL = await uploadUserPhoto(photo, croppedPhotoBlob, setPercent);
    await updateAuthUserPhoto(photoURL);
    await updateDBUserPhoto(photoURL);
    setLoading(UPLOADING_FILE, false);
    setIsModalOpen(false);
  };

  const onFileChange = e => {
    const photo = e.target.files[0];

    if (!photo.type.startsWith('image')) {
      toastr.info('Forbidden', 'Not an image');
    } else {
      const reader = new FileReader();

      reader.readAsDataURL(photo);
      reader.addEventListener('load', () => {
        setPhotoAsDataURL(reader.result);
        setPhoto(photo);
      });
    }
  };

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
              options={[
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
                  text: (
                    <div onClick={() => setIsModalOpen(true)}>
                      Change Avatar
                    </div>
                  ),
                },
                {
                  key: 'signout',
                  text: <div onClick={() => trySignOut(signOut)}>Sign Out</div>,
                },
              ]}
            />
          </Header>
        </Grid.Row>
      </Grid.Column>
      <Modal basic open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Change Avatar</Modal.Header>
        <Modal.Content>
          <Input
            fluid
            type="file"
            label="New Avatar"
            name="newPhoto"
            onChange={onFileChange}
            accept="image/*"
          />
          <Grid centered stackable columns={2}>
            <Grid.Row centered>
              <Grid.Column className="ui center aligned grid">
                {photoAsDataURL && (
                  <AvatarEditor
                    ref={avatarEditor}
                    image={photoAsDataURL}
                    width={120}
                    height={120}
                    border={50}
                    scale={1.2}
                  />
                )}
              </Grid.Column>
              <Grid.Column>
                {croppedPhoto && (
                  <Image
                    style={{
                      margin: '3.5em 0',
                      width: ' 100px',
                      height: '100px',
                    }}
                    src={croppedPhoto}
                  />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          {croppedPhotoBlob && (
            <Button
              color="green"
              disabled={isUploading}
              loading={isUploading}
              inverted
              onClick={onSubmit}
            >
              <Icon name="save" /> Change Avatar
            </Button>
          )}
          {photoAsDataURL && (
            <Button color="green" inverted onClick={onCropButtonClick}>
              <Icon name="image" /> Crop
            </Button>
          )}
          <Button
            color="red"
            inverted
            disabled={isUploading}
            loading={isUploading}
            onClick={() => setIsModalOpen(false)}
          >
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </Grid>
  );
};

const mapStateToProps = ({ theme, auth, loading }) => {
  return {
    user: auth.user,
    theme: theme.userTheme ?? theme.defaultTheme,
    isUploading: loading.isUploading,
  };
};

export default connect(mapStateToProps, { signOut, setPercent, setLoading })(
  UserPanel,
);
