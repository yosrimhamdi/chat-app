import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Icon, Input } from 'semantic-ui-react';

function UploadFileModal({ isModalOpen, closeModal }) {
  if (!isModalOpen) {
    return null;
  }

  const onFileChange = e => {
    console.log(e.target.files[0]);
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
          onChange={onFileChange}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button inverted color="green">
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

export default UploadFileModal;
