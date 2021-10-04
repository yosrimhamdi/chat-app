import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { v4 as uuidv4 } from 'uuid';

import validate from './validate';
import setPercent from '../../../redux/actions/setPercent';
import setLoading from '@actions/setLoading';
import ModalContext from '../ModalContext';
import Modal from '../Modal';
import FileInput from './FileInput';
import clearForm from '@actions/clearForm';
import createImageMessage from '../../../firebase/database/message/createImageMessage';
import { UPLOADING_FILE } from '@types';
import uploadImage from '../../../firebase/storage/uploadImage';

const FORM_NAME = 'uploadImageForm';

const UploadImageModal = ({
  setPercent,
  setLoading,
  handleSubmit,
  clearForm,
  invalid,
  channelId,
  uploadPath,
  messagePath,
}) => {
  const { closeModal } = useContext(ModalContext);

  const onSubmit = async ({ file }) => {
    const mimetype = file.type.split('/')[1];
    const path = `${uploadPath}/${channelId}/${uuidv4()}.${mimetype}`;

    setLoading(UPLOADING_FILE, true);
    closeModal();
    const imageURL = await uploadImage(file, path, setPercent);
    await createImageMessage(imageURL, messagePath, channelId);
    setLoading(UPLOADING_FILE, false);
    clearForm(FORM_NAME);
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

const mapStateToProps = ({ channels, upload, messages }) => ({
  channelId: channels.selectedChannel.id,
  uploadPath: upload.path,
  messagePath: messages.path,
});

export default connect(mapStateToProps, {
  setLoading,
  setPercent,
  clearForm,
})(WrappedForm);
