import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import setPercent from '../../redux/actions/setPercent';
import setLoading from '@actions/setLoading';
import ModalContext from './Modal/ModalContext';
import Modal from './Modal/Modal';
import createImageMessage from '../../firebase/database/message/createImageMessage';
import { UPLOADING_FILE } from '@types';
import uploadImage from '../../firebase/storage/uploadImage';
import { toastr } from 'react-redux-toastr';

const UploadImageModal = ({
  setPercent,
  setLoading,
  channelId,
  uploadPath,
  messagePath,
}) => {
  const { closeModal } = useContext(ModalContext);
  const [file, setFile] = useState();

  const resetModal = () => {
    setFile(null);
    closeModal();
  };

  const onSubmit = async () => {
    if (!file) {
      toastr.info('Forbidden', 'Not image selected');
    } else if (!file.type.startsWith('image/')) {
      toastr.info('Forbidden', 'Not an image');
    } else {
      const mimetype = file.type.split('/')[1];
      const path = `${uploadPath}/${channelId}/${uuidv4()}.${mimetype}`;

      setLoading(UPLOADING_FILE, true);
      resetModal();
      const imageURL = await uploadImage(file, path, setPercent);
      await createImageMessage(imageURL, messagePath, channelId);
      setLoading(UPLOADING_FILE, false);
    }
  };

  return (
    <Modal title="Create new channel" closeModal={resetModal}>
      <Modal.Content>
        <input
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files[0])}
        />
      </Modal.Content>
      <Modal.Actions>
        <Modal.Button onClick={onSubmit}>Upload Image</Modal.Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = ({ channels, upload, messages }) => ({
  channelId: channels.selectedChannel.id,
  uploadPath: upload.path,
  messagePath: messages.path,
});

export default connect(mapStateToProps, {
  setLoading,
  setPercent,
})(UploadImageModal);
