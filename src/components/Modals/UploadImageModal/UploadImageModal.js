import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Modal, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import FileInput from './FileInput';
import validate from './validate';
import clearForm from '@actions/clearForm';

function UploadImageModal({
  clearForm,
  handleSubmit,
  isModalOpen,
  closeModal,
}) {
  if (!isModalOpen) {
    return null;
  }

  const onCancelClick = () => {
    clearForm('uploadImageModal');
    closeModal();
  };

  const onFormSubmit = (formValues) => {
    console.log(formValues);
  };

  const modal = (
    <Modal basic open={true} onClose={closeModal}>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Modal.Header>Select An Image File</Modal.Header>
        <Modal.Content>
          <Field
            name="file"
            component={FileInput}
            normalize={(files) => files[0]}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="green">
            <Icon name="checkmark" /> Add
          </Button>
          <Button color="red" type="button" inverted onClick={onCancelClick}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Form>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

const mapStateToProps = (state) => ({
  selectedChannelId: state.channels.selectedChannel.id,
  user: state.auth.user,
});

const WrappedForm = reduxForm({ form: 'uploadImageModal', validate })(
  UploadImageModal
);

export default connect(mapStateToProps, { clearForm })(WrappedForm);
