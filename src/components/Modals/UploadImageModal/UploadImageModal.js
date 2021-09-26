import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Input, Modal, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import validate from './validate';
import uploadImage from '../../../firebase/storage/uploadImage';
import setFileToUpload from '../../../redux/actions/setFileToUpload';
import setPercent from '../../../redux/actions/setPercent';
import setLoading from '@actions/setLoading';
import ModalContext from '../../Modal/ModalContext';

const UploadImageModal = ({
  selectedChannelId,
  setFileToUpload,
  file,
  setPercent,
  setLoading,
}) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  if (!isModalOpen) {
    return null;
  }

  const clearModal = () => {
    closeModal();

    setFileToUpload(null);
  };

  const onSubmitButtonClick = () => {
    const valid = validate(file);

    if (valid) {
      uploadImage(file, selectedChannelId, setPercent, setLoading);

      clearModal();
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
          onChange={e => setFileToUpload(e.target.files[0])}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button inverted color="green" onClick={onSubmitButtonClick}>
          <Icon name="checkmark" /> Add
        </Button>
        <Button color="red" type="button" inverted onClick={clearModal}>
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

const mapStateToProps = state => ({
  selectedChannelId: state.channels.selectedChannel.id,
  file: state.upload.file,
});

export default connect(mapStateToProps, {
  setFileToUpload,
  setLoading,
  setPercent,
})(UploadImageModal);
