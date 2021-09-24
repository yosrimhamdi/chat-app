import React from 'react';
import ReactDOM from 'react-dom';
import { Input, Modal, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import validate from './validate';
import uploadImage from '../../../firebase/storage/uploadImage';
import createImageMessage from '../../../firebase/database/createImageMessage';
import setFileToUpload from '../../../redux/actions/setFileToUpload';
import setLoading from '@actions/setLoading';
import { UPLOADING_FILE } from '@types';

const UploadImageModal = ({
  isModalOpen,
  closeModal,
  selectedChannelId,
  user,
  setFileToUpload,
  file,
  setLoading,
  isUploading,
}) => {
  if (!isModalOpen) {
    return null;
  }

  const onCancelButtonClick = () => {
    closeModal();

    setFileToUpload(null);
  };

  const onSubmitButtonClick = async () => {
    const valid = validate(file);

    if (valid) {
      setLoading(UPLOADING_FILE, true);

      const imageURL = await uploadImage(file);

      await createImageMessage(imageURL, selectedChannelId, user);

      setLoading(UPLOADING_FILE, false);

      closeModal();
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
          accept="image/*"
          fluid
          onChange={(e) => setFileToUpload(e.target.files[0])}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button
          inverted
          color="green"
          onClick={onSubmitButtonClick}
          loading={isUploading}
          className={isUploading ? 'loading' : ''}
        >
          <Icon name="checkmark" /> Add
        </Button>
        <Button
          color="red"
          type="button"
          inverted
          onClick={onCancelButtonClick}
        >
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

const mapStateToProps = (state) => ({
  selectedChannelId: state.channels.selectedChannel.id,
  user: state.auth.user,
  file: state.upload.file,
  isUploading: state.loading.isUploading,
});

export default connect(mapStateToProps, { setFileToUpload, setLoading })(
  UploadImageModal
);
