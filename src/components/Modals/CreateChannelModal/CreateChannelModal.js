import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Modal from '../../Modal/Modal';
import createChannel from '../../../firebase/database/createChannel';
import { CREATING_CHANNEL } from '@types';
import setLoading from '../../../redux/actions/setLoading';
import validate from './validate';
import Input from '../../Input/Input';
import ModalContext from '../../Modal/ModalContext';
import clearForm from '@actions/clearForm';

const FORM_NAME = 'createChannelForm';

const CreateChannelModal = ({
  user,
  setLoading,
  isCreatingChannel,
  handleSubmit,
  invalid,
  clearForm,
}) => {
  const { closeModal } = useContext(ModalContext);

  const onSubmit = async formValues => {
    setLoading(CREATING_CHANNEL, true);
    await createChannel(formValues, user);
    setLoading(CREATING_CHANNEL, false);
    clearForm(FORM_NAME);
    closeModal();
  };

  return (
    <Modal
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      loading={isCreatingChannel}
      title="Create new channel"
      buttonMessage="Create"
      invalid={invalid}
    >
      <Field label="Name of Channel" name="channelName" component={Input} />
      <Field
        label="About the Channel"
        name="channelDetails"
        component={Input}
      />
    </Modal>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isCreatingChannel: state.loading.isCreatingChannel,
});

const WrappedForm = reduxForm({ form: FORM_NAME, validate })(
  CreateChannelModal,
);

export default connect(mapStateToProps, { setLoading, clearForm })(WrappedForm);