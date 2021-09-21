import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Form, Button, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

import ModalInput from './ModalInput';

function Modals({ isModalOpen, setIsModalOpen, handleSubmit }) {
  if (!isModalOpen) {
    return null;
  }

  const onFormSubmit = formValues => {
    console.log(formValues);
  };

  const modal = (
    <Modal basic open={true} onClose={() => setIsModalOpen(false)}>
      <Modal.Header>Add a Channel</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Field>
            <Field
              label="Name of Channel"
              name="channelName"
              component={ModalInput}
            />
          </Form.Field>
          <Form.Field>
            <Field
              label="About the Channel"
              name="channelDetails"
              component={ModalInput}
            />
          </Form.Field>
          <Modal.Actions style={{ textAlign: 'right' }}>
            <Button color="green" type="submit">
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" inverted onClick={() => setIsModalOpen(false)}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

export default reduxForm({ form: 'createNewChannelForm' })(Modals);
