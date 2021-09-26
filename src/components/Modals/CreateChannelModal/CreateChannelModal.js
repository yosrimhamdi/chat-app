import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Modal from './Modal';
import createChannel from '../../../firebase/database/createChannel';
import { CREATING_CHANNEL } from '@types';
import setLoading from '../../../redux/actions/setLoading';
import validate from './validate';

const CreateChannelModal = ({
  user,
  setLoading,
  closeModal,
  isModalOpen,
  isCreatingChannel,
  handleSubmit,
}) => {
  const onSubmit = async formValues => {
    setLoading(CREATING_CHANNEL, true);
    await createChannel(formValues, user);
    setLoading(CREATING_CHANNEL, false);
    closeModal();
  };

  return (
    <Modal
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      loading={isCreatingChannel}
      title="Create new channel"
    />
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isCreatingChannel: state.loading.isCreatingChannel,
});

const WrappedForm = reduxForm({ form: 'createChannelForm', validate })(
  CreateChannelModal,
);

export default connect(mapStateToProps, { setLoading })(WrappedForm);
