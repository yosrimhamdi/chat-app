import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Form, Button, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import ModalInput from './ModalInput';
import validate from './validate';
import createChannel from '../../firebase/database/createChannel';
import clearForm from '@actions/clearForm';

function Modals({
  isModalOpen,
  setIsModalOpen,
  handleSubmit,
  clearForm,
  user,
}) {
  const clearModal = () => {
    setIsModalOpen(false);
    clearForm('createNewChannelForm');
  };

  if (!isModalOpen) {
    return null;
  }

  const onFormSubmit = formValues => {
    createChannel(formValues, user);
    clearModal();
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
            <Button inverted color="green" type="submit">
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" type="button" inverted onClick={clearModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

const WrappedForm = reduxForm({ form: 'createNewChannelForm', validate })(
  Modals,
);

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { clearForm })(WrappedForm);
