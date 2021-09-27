import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import validate from './validate';
import uploadImage from '../../../firebase/storage/uploadImage';
import setPercent from '../../../redux/actions/setPercent';
import setLoading from '@actions/setLoading';
import ModalContext from '../ModalContext';
import Modal from '../Modal';
import FileInput from './FileInput';
import clearForm from '@actions/clearForm';

const FORM_NAME = 'uploadImageForm';

const UploadImageModal = ({
  messagesPath,
  setPercent,
  setLoading,
  handleSubmit,
  clearForm,
  invalid,
}) => {
  const { closeModal } = useContext(ModalContext);

  const onSubmit = ({ file }) => {
    uploadImage(file, messagesPath, setPercent, setLoading);
    clearForm(FORM_NAME);
    closeModal();
  };

  return (
    <Modal
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      title="Upload an image"
      buttonMessage="Upload"
      invalid={invalid}
    >
      <Field name="file" normalize={file => file[0]} component={FileInput} />
    </Modal>
  );
};

const WrappedForm = reduxForm({ form: FORM_NAME, validate })(UploadImageModal);

const mapStateToProps = state => ({
  messagesPath: state.messages.path,
});

export default connect(mapStateToProps, {
  setLoading,
  setPercent,
  clearForm,
})(WrappedForm);
