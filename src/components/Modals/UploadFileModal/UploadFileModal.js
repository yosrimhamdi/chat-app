import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import uploadFile from '../../../firebase/storage/uploadFile';
import createImageMessage from '../../../firebase/database/createImageMessage';

function UploadFileModal({ isModalOpen, closeModal, selectedChannelId, user }) {
  const [file, setFile] = useState(null);

  if (!isModalOpen) {
    return null;
  }

  const onButtonClick = async () => {
    if (file) {
      const imageURL = await uploadFile(file, selectedChannelId);

      createImageMessage(imageURL, selectedChannelId, user);
    } else {
      console.log('please select a file');
    }
  };

  const modal = (
    <Modal basic open={true} onClose={closeModal}>
      <Modal.Header>Select An Image File</Modal.Header>
      <Modal.Content>
        <Input
          name="file"
          type="file"
          label="File type; jpg, png"
          accept="images/*"
          fluid
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onButtonClick} inverted color="green">
          <Icon name="checkmark" /> Add
        </Button>
        <Button color="red" type="button" inverted onClick={closeModal}>
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

const mapStateToProps = (state) => ({
  selectedChannelId: state.channels.selectedChannel.id,
  user: state.auth.user,
});

export default connect(mapStateToProps)(UploadFileModal);
