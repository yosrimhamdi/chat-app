import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../../Modals/Modal';
import createChannel from '../../../firebase/database/channel/createChannel';
import { CREATING_CHANNEL } from '@types';
import setLoading from '../../../redux/actions/setLoading';
import ModalContext from '../ModalContext';
import { toastr } from 'react-redux-toastr';

const CreateChannelModal = ({ setLoading, isCreatingChannel }) => {
  const { closeModal } = useContext(ModalContext);
  const [channelName, setChannelName] = useState('');
  const [channelDescription, setChannelDescription] = useState('');

  const resetModal = () => {
    closeModal();
    setChannelName('');
    setChannelDescription('');
  };

  const onSubmit = async () => {
    if (!channelName) {
      toastr.info('Empty value found', 'Channel name is required');
    } else if (!channelDescription) {
      toastr.info('Empty value found', 'Channel description is required');
    } else {
      setLoading(CREATING_CHANNEL, true);
      await createChannel(channelName, channelDescription);
      setLoading(CREATING_CHANNEL, false);
      resetModal();
    }
  };

  return (
    <Modal
      loading={isCreatingChannel}
      title="Create new channel"
      closeModal={resetModal}
    >
      <Modal.Content>
        <Modal.Input
          label="Channel Name"
          type="text"
          value={channelName}
          onChange={e => setChannelName(e.target.value)}
        />
        <Modal.Input
          label="Channel Description"
          type="text"
          value={channelDescription}
          onChange={e => setChannelDescription(e.target.value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Modal.Button onClick={onSubmit}>Create Channel</Modal.Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = state => ({
  isCreatingChannel: state.loading.isCreatingChannel,
});

export default connect(mapStateToProps, { setLoading })(CreateChannelModal);
