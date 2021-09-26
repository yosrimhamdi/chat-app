import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import './CreateChannelModal.scss';
import Input from './Input/Input';
import validate from './validate';
import createChannel from '../../../firebase/database/createChannel';
import Spinner from '../../Spinner2/Spinner';
import setLoading from '@actions/setLoading';
import { CREATING_CHANNEL } from '@types';
import classNames from 'classnames';
import closeIcon from './close.svg';

const CreateChannelModal = ({
  isModalOpen,
  closeModal,
  handleSubmit,
  user,
  setLoading,
  isCreatingChannel,
  invalid,
}) => {
  const buttonClassName = classNames({
    'create-post-modal__button': true,
    'create-post-modal__button--valid': !invalid,
  });

  if (!isModalOpen) {
    return null;
  }

  const onFormSubmit = async formValues => {
    setLoading(CREATING_CHANNEL, true);
    await createChannel(formValues, user);
    setLoading(CREATING_CHANNEL, false);
    closeModal();
  };

  const modal = (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="create-post-modal"
      onClick={closeModal}
    >
      <div
        className="create-post-modal__wrapper"
        onClick={e => e.stopPropagation()}
      >
        <div className="create-post-modal__content">
          <div className="create-post-modal__header">
            <h1 className="create-post-modal__title">Create new channel</h1>
            <div onClick={closeModal}>
              <img
                src={closeIcon}
                alt="close"
                className="create-post-modal__close-icon"
              />
            </div>
          </div>
          <Field label="Name of Channel" name="channelName" component={Input} />
          <Field
            label="About the Channel"
            name="channelDetails"
            component={Input}
          />
        </div>
        <div className="create-post-modal__actions">
          <button className={buttonClassName} type="submit">
            Create
          </button>
        </div>
        <Spinner visible={isCreatingChannel} />
      </div>
    </form>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

const WrappedForm = reduxForm({ form: 'createNewChannelForm', validate })(
  CreateChannelModal,
);

const mapStateToProps = state => ({
  user: state.auth.user,
  isCreatingChannel: state.loading.isCreatingChannel,
});

export default connect(mapStateToProps, { setLoading })(WrappedForm);
