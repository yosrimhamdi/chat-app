import React from 'react';
import ReactDOM from 'react-dom';
import { Field } from 'redux-form';

import './CreateChannelModal.scss';
import Input from './Input/Input';
import Spinner from '../../Spinner2/Spinner';
import classNames from 'classnames';
import closeIcon from './close.svg';

const Modal = ({
  isModalOpen,
  closeModal,
  handleSubmit,
  onSubmit,
  loading,
  invalid,
  title,
}) => {
  if (!isModalOpen) {
    return null;
  }

  const buttonClassName = classNames({
    'create-post-modal__button': true,
    'create-post-modal__button--valid': !invalid,
  });

  const modal = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="create-post-modal"
      onClick={closeModal}
    >
      <div
        className="create-post-modal__wrapper"
        onClick={e => e.stopPropagation()}
      >
        <div className="create-post-modal__content">
          <div className="create-post-modal__header">
            <h1 className="create-post-modal__title">{title}</h1>
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
        <Spinner visible={loading} />
      </div>
    </form>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

export default Modal;
