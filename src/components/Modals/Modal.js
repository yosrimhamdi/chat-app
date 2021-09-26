import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import './Modal.scss';
import Spinner from '../Spinner/Spinner';
import closeIcon from './close.svg';
import ModalContext from './ModalContext';

const Modal = ({
  handleSubmit,
  onSubmit,
  loading,
  invalid,
  title,
  children,
  buttonMessage,
}) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  if (!isModalOpen) {
    return null;
  }

  const buttonClassName = classNames({
    'modal__button': true,
    'modal__button--valid': !invalid,
  });

  const modal = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="modal"
      onClick={closeModal}
    >
      <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
        <div className="modal__content">
          <div className="modal__header">
            <h1 className="modal__title">{title}</h1>
            <div onClick={closeModal}>
              <img src={closeIcon} alt="close" className="modal__close-icon" />
            </div>
          </div>
          {children}
        </div>
        <div className="modal__actions">
          <button className={buttonClassName} type="submit">
            {buttonMessage}
          </button>
        </div>
        <Spinner visible={loading} />
      </div>
    </form>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal'));
};

export default Modal;
