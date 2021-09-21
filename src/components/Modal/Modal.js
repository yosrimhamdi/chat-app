import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Form, Input, Button, Icon } from 'semantic-ui-react';

function Modals({ isModalOpen, setIsModalOpen }) {
  if (!isModalOpen) {
    return null;
  }

  const modal = (
    <Modal basic open={true} onClose={() => setIsModalOpen(false)}>
      <Modal.Header>Add a Channel</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <Input fluid label="Name of Channel" name="channelName" />
          </Form.Field>

          <Form.Field>
            <Input fluid label="About the Channel" name="channelDetails" />
          </Form.Field>
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button color="green" inverted>
          <Icon name="checkmark" /> Add
        </Button>
        <Button color="red" inverted onClick={() => setIsModalOpen(false)}>
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

export default Modals;
