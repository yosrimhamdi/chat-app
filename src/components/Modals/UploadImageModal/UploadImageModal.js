import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import validate from './validate';
import uploadImage from '../../../firebase/storage/uploadImage';
import setPercent from '../../../redux/actions/setPercent';
import setLoading from '@actions/setLoading';
import ModalContext from '../../Modal/ModalContext';
import Modal from '../../Modal/Modal';
import FileInput from '../../Input/FileInput';
import clearForm from '@actions/clearForm';

const UploadImageModal = ({
  selectedChannelId,
  setPercent,
  setLoading,
  handleSubmit,
  clearForm,
  invalid,
}) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  if (!isModalOpen) {
    return null;
  }

  const onSubmit = ({ file }) => {
    uploadImage(file, selectedChannelId, setPercent, setLoading);
    clearForm('uploadImageForm');
    closeModal();
  };

  return (
    <Modal
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      loading={false}
      title="Upload an image"
      buttonMessage="Upload"
      invalid={invalid}
    >
      <Field name="file" normalize={file => file[0]} component={FileInput} />
    </Modal>
  );
};

const WrappedForm = reduxForm({ form: 'uploadImageForm', validate })(
  UploadImageModal,
);

const mapStateToProps = state => ({
  selectedChannelId: state.channels.selectedChannel.id,
});

export default connect(mapStateToProps, {
  setLoading,
  setPercent,
  clearForm,
})(WrappedForm);
