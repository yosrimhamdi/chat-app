import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Form, Button, Icon, Input } from 'semantic-ui-react';

function Modals({ isModalOpen, closeModal }) {
  if (!isModalOpen) {
    return null;
  }

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(e);
    closeModal();
  };

  const modal = (
    <Modal basic open={true} onClose={closeModal}>
      <Modal.Header>Select An Image File</Modal.Header>
      <Modal.Content>
        <Form onSubmit={onFormSubmit}>
          <Form.Field>
            <Input
              name="file"
              type="file"
              label="File type; jpg, png"
              accept="images/*"
              fluid
            />
          </Form.Field>
          <Modal.Actions style={{ textAlign: 'right' }}>
            <Button color="green" type="submit">
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" type="button" inverted onClick={closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

export default Modals;
